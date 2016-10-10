import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  error: null,
  user: null,
  isLoading: false,
  message: null,
};

const signupReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.SIGNUP_REQUEST_INITIATION:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case types.SIGNUP_REQUEST_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          user: action.user,
        });
      case types.SIGNUP_REQUEST_FAILURE:
        return Object.assign({}, state, {
          isLoading: false,
          error: action.error,
        });
      case types.CLEAR_SIGNUP_ERROR:
        return Object.assign({}, state, {
          error: null,
        });
      case types.SIGNUP_SET_MESSAGE:
        return update(state, {
          message: {
            $set: action.message,
          },
        });
      case types.SIGNUP_CLEAR_MESSAGE:
        return update(state, {
          message: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default signupReducer;
