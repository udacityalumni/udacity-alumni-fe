import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  articles: null,
  error: null,
  isLoading: false,
};

const contentDashboardReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.DASHBOARD_ARTICLES_INITIATION:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.DASHBOARD_ARTICLES_SUCCESS:
        return update(state, {
          isLoading: {
            $set: false,
          },
          articles: {
            $set: action.articles,
          },
        });
      case types.DASHBOARD_ARTICLES_FAILURE:
        return update(state, {
          isLoading: {
            $set: false,
          },
          error: {
            $set: action.error,
          },
        });
      case types.CLEAR_DASHBOARD_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default contentDashboardReducer;
