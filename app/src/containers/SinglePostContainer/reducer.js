import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  // Initial State goes here!
  isLoading: false,
  article: null,
  errors: null,
};

const singlePostReducer =
  (state = initialState, action) => {
    switch (action.type) {
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
      case types.SINGLEPOST_DEFAULT_ACTION:
        return state;
      default:
        return state;
    }
  };

export default singlePostReducer;
