import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserProfileActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

class UserProfile extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.userProfile}>
      </div>
    );
  }
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    UserProfileActionCreators,
    dispatch
  ),
});

const Container = cssModules(UserProfile, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
