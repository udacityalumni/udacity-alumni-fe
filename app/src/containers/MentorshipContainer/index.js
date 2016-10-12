import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MentorshipActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import Section from 'grommet-udacity/components/Section';
import Button from 'grommet-udacity/components/Button';

class Mentorship extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.mentorship}>
        <Hero
          backgroundImage="http://www.kdejepeta.cz/wp-content/uploads/2016/03/helping-climb.jpg"
        >
          <Headline strong>
            Udacity Mentorship
          </Headline>
          <Heading tag="h2" strong>
            Together, we are stronger
          </Heading>
        </Hero>
      <Section align="center" justify="center">
        <Heading>
          Udacity Mentorship
        </Heading>
        <Heading tag="h3">
          This page is not yet fully implemented
        </Heading>
        <Heading tag="h3">
          If you think you can help us build it,
        </Heading>
        <Button href="mailto:admin@ryancollins.io" label="Get in Touch!" />
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
    MentorshipActionCreators,
    dispatch
  ),
});

const Container = cssModules(Mentorship, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
