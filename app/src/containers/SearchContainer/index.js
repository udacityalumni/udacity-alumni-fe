import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Anchor from 'grommet-udacity/components/Anchor';
import SearchIcon from 'grommet-udacity/components/icons/base/Search';
import LinkPreviousIcon from 'grommet-udacity/components/icons/base/LinkPrevious';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import Box from 'grommet-udacity/components/Box';
import { ArticlePreview } from 'components';
import { LoadingIndicator, ErrorAlert } from 'components';

class Search extends Component {
  constructor() {
    super();
    this.handleClearError = this.handleClearError.bind(this);
  }
  componentDidMount() {
    const {
      loadSearchArticles,
    } = this.props.actions;
    loadSearchArticles();
  }
  handleClearError() {
    const {
      clearSearchErrors,
    } = this.props.actions;
    clearSearchErrors();
  }
  render() {
    const {
      searchTerm,
      articles,
      errorMessage,
      isLoading,
    } = this.props;
    const filterableTerm = searchTerm && searchTerm.toLowerCase();
    const filteredArticles = articles && articles.filter(article =>
      article.title.toLowerCase().includes(filterableTerm) ||
        article.content.toLowerCase().includes(filterableTerm) ||
          article.user.name.toLowerCase().includes(filterableTerm)
    );
    return (
      <Section className={styles.search}>
        {isLoading &&
          <LoadingIndicator isLoading={isLoading} />
        }
        {errorMessage &&
          <ErrorAlert
            errors={[new Error(errorMessage)]}
            onClose={this.handleClearError}
          />
        }
        {searchTerm && searchTerm !== '' &&
          <Box align="center" justify="center">
            <Header justify="between">
              <Title>
                {`Found ${filteredArticles.length} results for the term "${searchTerm}"`}
              </Title>
            </Header>
            {filteredArticles && filteredArticles.length > 0 &&
              <List>
                {filteredArticles.map((article, i) =>
                  <ListItem key={i}>
                    <ArticlePreview article={article} />
                  </ListItem>
                )}
              </List>
            }
          </Box>
        }
        {((searchTerm && searchTerm === '') ||
          (filteredArticles && filteredArticles.length < 1)) &&
          <Box align="center" justify="center" className={styles.centerBox}>
            <SearchIcon size="xlarge" colorIndex="brand" />
            <Anchor
              icon={<LinkPreviousIcon size="small" />}
              href="/"
              label="Back to Home"
            />
          </Box>
        }
      </Section>
    );
  }
}

Search.propTypes = {
  searchTerm: PropTypes.string,
  errorMessage: PropTypes.string,
  articles: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  searchTerm: state.app.searchTerm,
  errorMessage: state.searchContainer.error,
  articles: state.searchContainer.articles,
  isLoading: state.searchContainer.isLoading,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    SearchActionCreators,
    dispatch
  ),
});

const Container = cssModules(Search, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
