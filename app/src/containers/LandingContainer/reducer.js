import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isLoading: false,
  carouselImages: [
    {
      src: 'http://zdnet4.cbsistatic.com/hub/i/r/2016/01/13/df0444a8-0bcd-46cc-b9d4-e5be56a36341/resize/770xauto/cd213f8602843b807ed63aef891203c7/image.jpg',
    },
    {
      src: 'http://zdnet4.cbsistatic.com/hub/i/r/2016/01/13/df0444a8-0bcd-46cc-b9d4-e5be56a36341/resize/770xauto/cd213f8602843b807ed63aef891203c7/image.jpg',
    },
    {
      src: 'http://zdnet4.cbsistatic.com/hub/i/r/2016/01/13/df0444a8-0bcd-46cc-b9d4-e5be56a36341/resize/770xauto/cd213f8602843b807ed63aef891203c7/image.jpg',
    },
  ],
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
      default:
        return state;
    }
  };

export default landingReducer;
