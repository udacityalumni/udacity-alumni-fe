import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  LoadingIndicator,
  MainCarousel,
  SpotlightArticles,
  MainAside,
} from 'components';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';

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
      carouselImages,
      mainArticles,
    } = this.props;
    return (
      <div className={styles.landing}>
        {isLoading ?
          <LoadingIndicator isLoading={isLoading} />
        :
          <Section
            alignContent="center"
            align="center"
          >
            <Box direction="row">
              <Box
                basis="2/3"
                pad="medium"
                align="center"
                justify="center"
                className={styles.mainContent}
              >
                <MainCarousel images={carouselImages} />
                <SpotlightArticles articles={mainArticles} />
              </Box>
              <MainAside
                user={{
                  avatar: "http://1onjea25cyhx3uvxgs4vu325.wpengine.netdna-cdn.com/wp-content/uploads/2016/05/image08.png",
                  name: 'David',
                }}
              />
            </Box>
          </Section>
        }
      </div>
    );
  }
}

Landing.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  carouselImages: PropTypes.array.isRequired,
  mainArticles: PropTypes.array.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isLoading: state.landing.isLoading,
  carouselImages: state.landing.carouselImages,
  mainArticles: state.landing.mainArticles,
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
