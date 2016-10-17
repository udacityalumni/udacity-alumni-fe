import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isLoading: false,
  carouselImages: [],
  featuredArticles: null,
  errors: null,
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
          errors: {
            $set: action.errors,
          },
        });
      case types.CLEAR_LANDING_ERRORS:
        return update(state, {
          errors: {
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
          errors: {
            $set: [...state.errors, action.error],
          },
        });
      default:
        return state;
    }
  };

export default landingReducer;
