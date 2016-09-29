import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SignupActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';

class Signup extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.signup}>
        <Heading align="center">
          Hello from Signup Container
        </Heading>
        <Heading align="center" tag="h3">
          Please implement me. For an example, see here:
        </Heading>
        <Anchor href="https://github.com/RyanCCollins/code-review-client/tree/master/app/src/containers/SignupContainer">
          https://github.com/RyanCCollins/code-review-client/tree/master/app/src/containers/SignupContainer
        </Anchor>
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
    SignupActionCreators,
    dispatch
  ),
});

const Container = cssModules(Signup, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);