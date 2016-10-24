import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MentorshipActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import { MartinRulz } from 'components';
const MentorshipPageImage = 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/mentoring.jpg?raw=true';

class Mentorship extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.mentorship}>
        <Hero
          backgroundImage={MentorshipPageImage}
        >
          <Headline strong>
            Udacity Mentorship
          </Headline>
          <Heading tag="h2" strong>
            Together, we are stronger
          </Heading>
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
    MentorshipActionCreators,
    dispatch
  ),
});

const Container = cssModules(Mentorship, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
