import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  LoadingIndicator,
  MainCarousel,
  SpotlightArticles,
  MainAside,
  ToastMessage,
} from 'components';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';

class Landing extends Component {
  componentDidMount() {
    const {
      actions,
      featuredArticles,
    } = this.props;
    if (!featuredArticles || !featuredArticles.length > 0) {
      actions.loadFeaturedArticles();
    }
    actions.loadSpotlightedImages();
  }
  render() {
    const {
      isLoading,
      carouselImages,
      featuredArticles,
      error,
      user,
      actions,
    } = this.props;
    return (
      <div className={styles.landing}>
        {error &&
          <ToastMessage
            message={error.message}
            status="critical"
            onClose={() => actions.clearLandingError()}
          />
        }
        {isLoading ?
          <Section
            align="center"
            justify="center"
            className={styles.loadingBox}
          >
            <LoadingIndicator isLoading={isLoading} />
          </Section>
        :
          <Section
            primary
            alignContent="center"
            align="center"
            className={styles.mainSection}
          >
            <Box direction="row">
              <Box
                align="center"
                justify="center"
                className={styles.mainContent}
              >
                <MainCarousel images={carouselImages} />
                {featuredArticles && featuredArticles.length > 0 &&
                  <SpotlightArticles articles={featuredArticles} />
                }
              </Box>
              {user && user.role === 'admin' &&
                <MainAside user={user} />
              }
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
  featuredArticles: PropTypes.array,
  error: PropTypes.object,
  user: PropTypes.object,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isLoading: state.landing.isLoading,
  carouselImages: state.landing.carouselImages,
  featuredArticles: state.landing.featuredArticles,
  error: state.landing.error,
  user: state.app.user,
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
