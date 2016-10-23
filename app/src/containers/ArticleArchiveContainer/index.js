import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ArticleArchiveActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import Button from 'grommet-udacity/components/Button';
import LinkPreviousIcon from 'grommet-udacity/components/icons/base/LinkPrevious';
import { ArticleFeedItem, LoadingIndicator, Divider } from 'components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const NoArticlesFound = () => (
  <Section className="full-height">
    <Heading align="center">
      No Articles Found
    </Heading>
    <Button
      label="Back to Home"
      href="/"
      plain
      icon={<LinkPreviousIcon />}
    />
  </Section>
);

class ArticleArchive extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const {
      actions,
      location,
    } = this.props;
    actions.setTag(
      decodeURIComponent(location.query.tag)
    );
  }
  render() {
    const {
      loadingArticles,
      articles,
      selectedTag,
    } = this.props;
    return (
      <Section align="center" justify="center">
        {loadingArticles ?
          <Section className="full-height" align="center" justify="center">
            <LoadingIndicator isLoading />
          </Section>
        :
          <Box className={styles.articleFeed}>
            <Headline
              align="center"
              className={styles.feedHeading}
            >
              Article Archive
            </Headline>
            <Heading align="center" tag="h3">
              {`Selected Tag: ${selectedTag}`}
            </Heading>
            <Divider />
            <Section pad={{ horizontal: 'large' }} align="center" justify="center">
              <Box>
                <List>
                  <Box
                    align="center"
                    justify="center"
                    className={styles.listItem}
                  >
                    {articles && articles.length ?
                      articles.map((article, i) =>
                        <Section key={i} pad={{ vertical: 'large' }}>
                          <ListItem>
                            <ArticleFeedItem article={article} />
                          </ListItem>
                        </Section>
                      )
                    :
                      <NoArticlesFound />
                    }
                  </Box>
                </List>
              </Box>
            </Section>
          </Box>
        }
      </Section>
    );
  }
}

ArticleArchive.propTypes = {
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  selectedTag: PropTypes.string,
  loadingArticles: PropTypes.bool.isRequired,
  articles: PropTypes.array,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  selectedTag: state.archiveContainer.tag,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ArticleArchiveActionCreators,
    dispatch
  ),
});

const Container = cssModules(ArticleArchive, styles);

const loadArticleFeed = gql`
  query articleFeed($tag: String!) {
    articles(tag: $tag) {
      tags {
        id
        tag
      }
      id
      title
      created_at
      updated_at
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
  }
`;

const ContainerWithData = graphql(loadArticleFeed, {
  options: (ownProps) => ({
    variables: {
      tag: ownProps.selectedTag,
    },
  }),
  props: ({ data: { loading, articles } }) => ({
    articles,
    loadingArticles: loading,
  }),
})(Container);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
