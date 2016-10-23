import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SingleArticleActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { SingleArticle, ErrorAlert, LoadingIndicator } from 'components';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import Status from 'grommet-udacity/components/icons/Status';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { updatePageTitle } from '../../../utils/a11y';
import singleArticleFragment from './graph/fragments';

class SingleArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLoadingOfArticle = this.handleLoadingOfArticle.bind(this);
  }
  componentDidMount() {
    this.handleLoadingOfArticle();
  }
  componentWillReceiveProps(newProps) {
    const {
      article,
    } = newProps;
    if (article) {
      if (window) {
        updatePageTitle(`${article.title.slice(0, 10)} | Udacity Alumni Blog`);
      }
    }
  }
  handleLoadingOfArticle() {
    const {
      params,
    } = this.props;
    const slug = params.slug;
    if (!slug) {
      const {
        router,
      } = this.context;
      router.push('/');
    }
  }
  render() {
    const {
      articleLoading,
      singleArticle,
      errors,
      actions,
    } = this.props;
    return (
      <Section
        align="center"
        justify="center"
        className={styles.singleArticleContainer}
      >
        {articleLoading ?
          <LoadingIndicator
            message="Loading"
            isLoading
          />
        :
          <Box className={styles.mainSection}>
            {singleArticle ?
              <div className={styles.singleArticle}>
                <SingleArticle article={singleArticle} />
              </div>
            :
              <div className={styles.center}>
                <Status value="unknown" />
                <figcaption> No Article Found </figcaption>
              </div>
            }
            {errors && errors.length > 0 &&
              <ErrorAlert
                errors={errors}
                onClose={() => actions.closeArticleErrors()}
              />
            }
          </Box>
      }
      </Section>
    );
  }
}

SingleArticleContainer.propTypes = {
  articleLoading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  singleArticle: PropTypes.object,
  errors: PropTypes.array,
  params: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

SingleArticleContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  errors: state.singleArticleContainer.errors,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    SingleArticleActionCreators,
    dispatch
  ),
});

const Container = cssModules(SingleArticleContainer, styles);

const loadArticleQuery = gql`
  query article($slug: String) {
    article(slug: $slug) {
      ...singleArticleFragment
    }
  }
`;

const ContainerWithData = graphql(loadArticleQuery, {
  options: (ownProps) => ({
    fragments: [singleArticleFragment],
    skip: !ownProps.params.slug,
    variables: {
      slug: ownProps.params.slug,
    },
  }),
  props: ({ data: { loading, article, error } }) => ({
    singleArticle: article,
    articleLoading: loading,
    articleError: error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
