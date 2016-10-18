import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CarouselWidgetActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

class CarouselWidget extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.carouselWidget}>
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
    CarouselWidgetActionCreators,
    dispatch
  ),
});

const Container = cssModules(CarouselWidget, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
