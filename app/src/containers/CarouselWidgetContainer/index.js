import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CarouselWidgetActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import { MainCarousel } from 'components';

class CarouselWidget extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      images,
    } = this.props;
    return (
      <div className={styles.carouselWidget}>
        <Section
          alignContent="center"
          align="center"
        >
          <Heading align="center">
            Carousel Widget
          </Heading>
          <MainCarousel images={images} />
        </Section>
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
