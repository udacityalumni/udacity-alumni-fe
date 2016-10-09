import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  articles: null,
  error: null,
  isLoading: false,
};

const searchReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.SEARCH_ARTICLES_INITIATION:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.SEARCH_ARTICLES_SUCCESS:
        return update(state, {
          isLoading: {
            $set: false,
          },
          articles: {
            $set: action.articles,
          },
        });
      case types.SEARCH_ARTICLES_FAILURE:
        return update(state, {
          isLoading: {
            $set: false,
          },
          error: {
            $set: action.error,
          },
        });
      case types.CLEAR_SEARCH_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default searchReducer;
