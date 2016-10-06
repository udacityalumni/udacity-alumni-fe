import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SinglePostActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { SinglePost } from 'components';

class SinglePostContainer extends Component { // eslint-disable-line react/prefer-stateless-function
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
    // const article = posts.filter(item => item.id === itemId)[0];
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
            <div className={styles.singlePost}>
              <SinglePost article={article} />
            </div>
            {errors.length > 0 &&
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
            <h4>{'Going back home where it\'s safe!'}</h4>
          </div>
        }
      </div>
    );
  }
}

SinglePostContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  article: PropTypes.object,
  errors: PropTypes.array,
  params: PropTypes.object.isRequired,
};

SinglePostContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
  isLoading: state.singlePostReducer.isLoading,
  article: state.singlePostReducer.article,
  errors: state.singlePostReducer.errors,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    SinglePostActionCreators,
    dispatch
  ),
});

const Container = cssModules(SinglePostContainer, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
