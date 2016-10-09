import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SingleArticleActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { SingleArticle, ErrorAlert, LoadingIndicator } from 'components';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import Status from 'grommet/components/icons/Status';
import { updatePageTitle } from '../../../utils/a11y';

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
        updatePageTitle(`${article.title.slice(10)} | Udacity Alumni Blog`);
      }
    }
  }
  handleLoadingOfArticle() {
    const {
      params,
    } = this.props;
    const itemId = parseInt(params.id, 10);
    if (!itemId) {
      const {
        router,
      } = this.context;
      router.push('/');
    }
    const {
      loadArticle,
    } = this.props.actions;
    loadArticle(itemId);
  }
  render() {
    const {
      isLoading,
      article,
      errors,
    } = this.props;
    return (
      <Section
        align="center"
        justify="center"
        className={styles.singleArticleContainer}
      >
        {isLoading ?
          <LoadingIndicator
            message="Loading"
            isLoading={isLoading}
          />
        :
        <Box className={styles.mainSection}>
          {article ?
            <div className={styles.singleArticle}>
              <SingleArticle article={article} />
            </div>
          :
            <div className={styles.center}>
              <Status value="unknown" />
              <figcaption> No Article Found </figcaption>
            </div>
          }
          {errors && errors.length > 0 &&
            <ErrorAlert errors={errors} onClose={this.handleErrorClose} />
          }
        </Box>
      }
      </Section>
    );
  }
}

SingleArticleContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  article: PropTypes.object,
  errors: PropTypes.array,
  params: PropTypes.object.isRequired,
};

SingleArticleContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
  isLoading: state.singleArticleContainer.isLoading,
  article: state.singleArticleContainer.article,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
