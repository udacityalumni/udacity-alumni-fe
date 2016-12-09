import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MeetupsActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Hero from 'grommet-udacity/components/Hero';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import { MartinRulz } from 'components';
const MeetupsImage = 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/meetups.jpeg?raw=true';
import Elm from 'react-elm-components';
import { Main } from 'elm/Main';

class Meetups extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.meetups}>
        <Hero
          backgroundImage={MeetupsImage}
        >
          <Headline strong>
            Udacity Meetups
          </Headline>
        </Hero>
        <MartinRulz />
        <Section>
          <Elm src={Main} />
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
    MeetupsActionCreators,
    dispatch
  ),
});

const Container = cssModules(Meetups, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
