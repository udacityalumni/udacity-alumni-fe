import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isLoading: false,
  carouselImages: [],
  featuredArticles: null,
  error: null,
};

const landingReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.FEATURED_ARTICLES_INITIATION:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.FEATURED_ARTICLES_SUCCESS:
        return update(state, {
          isLoading: {
            $set: false,
          },
          featuredArticles: {
            $set: action.articles,
          },
        });
      case types.FEATURE_ARTICLES_FAILURE:
        return update(state, {
          isLoading: {
            $set: false,
          },
          error: {
            $set: action.error,
          },
        });
      case types.CLEAR_LANDING_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      case types.SPOTLIGHTED_IMAGES_INITIATION:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.SPOTLIGHTED_IMAGES_SUCCESS:
        return update(state, {
          carouselImages: {
            $set: action.images,
          },
        });
      case types.SPOTLIGHTED_IMAGES_FAILURE:
        return update(state, {
          error: {
            $set: action.error,
          },
        });
      default:
        return state;
    }
  };

export default landingReducer;
