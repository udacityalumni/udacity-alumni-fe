import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoadingIndicator } from 'components';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';

class Landing extends Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const {
      fakeLoading,
    } = this.props.actions;
    fakeLoading();
  }
  render() {
    const {
      isLoading,
    } = this.props;
    return (
      <div className={styles.landing}>
        <Heading align="center">
          Welcome!
        </Heading>
        {isLoading ?
          <LoadingIndicator isLoading={isLoading} />
        :
          <Heading tag="h3" align="center">
            So glad you made it!
          </Heading>
        }
      </div>
    );
  }
}

Landing.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isLoading: state.landing.isLoading,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    LandingActionCreators,
    dispatch
  ),
});

const Container = cssModules(Landing, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
