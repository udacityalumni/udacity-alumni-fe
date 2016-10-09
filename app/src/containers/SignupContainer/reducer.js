import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  error: null,
  loggedInUser: null,
  isLoading: false,
};

const signupReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.SIGNUP_REQUEST_INITIATION:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.SIGNUP_REQUEST_SUCCESS:
        return update(state, {
          isLoading: {
            $set: false,
          },
          loggedInUser: {
            $set: action.user,
          },
        });
      case types.SIGNUP_REQUEST_FAILURE:
        return update(state, {
          isLoading: {
            $set: false,
          },
          error: {
            $set: action.error,
          },
        });
      case types.CLEAR_SIGNUP_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default signupReducer;
