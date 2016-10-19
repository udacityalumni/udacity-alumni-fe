import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ArticleFeedActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import List from 'grommet-udacity/components/List';
import Table from 'grommet-udacity/components/Table';
import ListItem from 'grommet-udacity/components/ListItem';
import { ArticleFeedItem, LoadingIndicator } from 'components';

class ArticleFeed extends Component {
  constructor() {
    super();
    this.handleLoadingMoreArticles = this.handleLoadingMoreArticles.bind(this);
  }
  handleLoadingMoreArticles() {
    setTimeout(() => {
      this.props.actions.articleFeedIncrementCurrent();
    }, 1000);
  }
  render() {
    const {
      articles,
      loading,
      current,
    } = this.props;
    let pagedArticles;
    if (articles) {
      pagedArticles = current <= articles.length - 1 ?
        articles.slice(0, current)
      :
        articles;
    }
    return (
      <Section align="center" justify="center">
        <Box className={styles.articleFeed} pad={{ vertical: 'large' }}>
          <Heading align="center">
            Article Feed
          </Heading>
          <Section pad={{ horizontal: 'large' }} align="center" justify="center">
            {loading || !articles ?
              <LoadingIndicator isLoading />
            :
              <Box>
                <Table
                  onMore={current <= articles.length - 1 ?
                    this.handleLoadingMoreArticles : null
                  }
                >
                  <List>
                    <Box align="center" justify="center" className={styles.listItem}>
                      {pagedArticles && pagedArticles.map((article, i) =>
                        <Section key={i} pad={{ vertical: 'large' }}>
                          <ListItem>
                            <ArticleFeedItem article={article} />
                          </ListItem>
                        </Section>
                      )}
                    </Box>
                  </List>
                </Table>
              </Box>
            }
          </Section>
        </Box>
      </Section>
    );
  }
}

ArticleFeed.propTypes = {
  current: PropTypes.number.isRequired,
  articles: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  actions: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  current: state.articleFeedContainer.current,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ArticleFeedActionCreators,
    dispatch
  ),
});

const Container = cssModules(ArticleFeed, styles);

const loadArticleFeed = gql`
query articleFeed {
  articleFeed {
    tags{
      id
      tag
    }
    id
    title
    content
    status
    spotlighted
    slug
    feature_image
    user {
      name
      bio
      avatar
    }
  }
  articleFeedCount
}
`;

const ContainerWithData = graphql(loadArticleFeed, {
  props: ({ data: { loading, articleFeed, articleFeedCount, error } }) => ({
    error,
    articles: articleFeed,
    count: articleFeedCount,
    loading,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
