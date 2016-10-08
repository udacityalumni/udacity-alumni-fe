import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SingleArticleActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { SingleArticle, ErrorAlert } from 'components';

class SingleArticleContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleLoadingOfArticle = this.handleLoadingOfArticle.bind(this);
  }

  componentDidMount() {
    this.handleLoadingOfArticle();
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
      <div>
        {article ?
          <div>
            <div className={styles.singleArticle}>
              <SingleArticle article={article} />
            </div>
            {errors && errors.length > 0 &&
              <ErrorAlert errors={errors} />
            }
            {isLoading ?
              <div>is loading</div>
            :
              <div>is not loading</div>
            }
          </div>
        :
          <div className={styles.containerCenter}>
            <h1 className={styles.noneFound}>No Restaurant Found</h1>
           </div>
        }
      </div>
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
