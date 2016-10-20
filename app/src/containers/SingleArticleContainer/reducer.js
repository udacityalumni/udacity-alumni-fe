import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  // Initial State goes here!
  isLoading: false,
  article: null,
  errors: null,
};

const singleArticleReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.CLOSE_ARTICLE_ERRORS:
        return update(state, {
          errors: {
            $set: null,
          },
        });
      case types.ARTICLE_INITIATION:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.ARTICLE_SUCCESS:
        return update(state, {
          isLoading: {
            $set: false,
          },
          article: {
            $set: action.article,
          },
        });
      case types.ARTICLE_FAILURE:
        return update(state, {
          isLoading: {
            $set: false,
          },
          errors: {
            $set: action.errors,
          },
        });
      default:
        return state;
    }
  };

export default singleArticleReducer;
