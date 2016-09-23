import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoadingIndicator } from 'components';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';

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
          <Section>
            <Heading tag="h3" align="center">
              So glad you could make it!
            </Heading>
            <Heading tag="h4" align="center">
              🎉🎉🎉
            </Heading>
            <Footer
              align="center"
              justify="center"
              pad={{ vertical: 'medium' }}
            >
              <Button
                onClick={(e) => e}
                href="https://github.com/udacityalumni/resources"
                label="Read the Docs"
                primary
              />
            </Footer>
          </Section>
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
