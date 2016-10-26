import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ResetPasswordActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

class ResetPassword extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.resetPassword}>
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
    ResetPasswordActionCreators,
    dispatch
  ),
});

const Container = cssModules(ResetPassword, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
