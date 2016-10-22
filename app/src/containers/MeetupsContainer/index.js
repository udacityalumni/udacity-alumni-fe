import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MeetupsActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import Section from 'grommet-udacity/components/Section';
import Button from 'grommet-udacity/components/Button';
import { MartinRulz } from 'components';

class Meetups extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.meetups}>
        <Hero
          backgroundImage="http://photos4.meetupstatic.com/photos/event/7/3/6/3/highres_451349539.jpeg"
        >
          <Headline strong>
            Udacity Meetups
          </Headline>
        </Hero>
        <MartinRulz />
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
    MeetupsActionCreators,
    dispatch
  ),
});

const Container = cssModules(Meetups, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
