import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SinglePostActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { SinglePost } from 'components';

class SinglePostContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
  }
  componentDidMount() {
    const {
      loadArticle,
    } = this.props.actions;
    loadArticle();
  }
  // If not using redux:
  // handleLoadingOfPost() {
  //   const {
  //     posts,
  //     params,
  //   } = this.props;
  //   const itemId = parseInt(params.id, 10);
  //   const selectedPost = posts.filter(item => item.id === itemId)[0];
  //   // if (!selectedPost) {
  //   //   const {
  //   //     router,
  //   //   } = this.context;
  //   //   router.push('/');
  //   // }
  //   return selectedPost;
  // }
  render() {
    const {
      isLoading,
      article,
      errors,
    } = this.props;
    return (
      <div className={styles.singlePost}>
        <SinglePost article={this.article} />
      </div>
    );
  }
}
SinglePostContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  article: PropTypes.object,
  errors: PropTypes.array,
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
