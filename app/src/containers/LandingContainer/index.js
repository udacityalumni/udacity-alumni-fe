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
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import { ErrorAlert } from 'components';

class Landing extends Component {
  constructor() {
    super();
    this.handleCloseErrorAlert = this.handleCloseErrorAlert.bind(this);
  }
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
  handleCloseErrorAlert() {
    const {
      clearLandingErrors,
    } = this.props.actions;
    clearLandingErrors();
  }
  render() {
    const {
      isLoading,
      carouselImages,
      featuredArticles,
      errors,
      user,
    } = this.props;
    return (
      <div className={styles.landing}>
        {errors && errors.length > 0 &&
          <ErrorAlert
            errors={errors}
            onClose={this.handleCloseErrorAlert}
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
                basis={user ? '2/3' : 'full'}
                pad="large"
                align="center"
                justify="center"
                className={styles.mainContent}
              >
                <MainCarousel images={carouselImages} />
                {featuredArticles && featuredArticles.length > 0 &&
                  <SpotlightArticles articles={featuredArticles} />
                }
              </Box>
              {user &&
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
  errors: PropTypes.array,
  user: PropTypes.object,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isLoading: state.landing.isLoading,
  carouselImages: state.landing.carouselImages,
  featuredArticles: state.landing.featuredArticles,
  errors: state.landing.errors,
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
