import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  errors: [],
  loggedInUser: null,
  isLoading: false,
};

const loginReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.START_LOGIN_REQUEST:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.LOGIN_REQUEST_SUCCESS:
        return update(state, {
          isLoading: {
            $set: false,
          },
          loggedInUser: {
            $set: action.user,
          },
        });
      case types.LOGIN_REQUEST_FAILURE:
        return update(state, {
          isLoading: {
            $set: false,
          },
          errors: {
            $set: [
              ...state.errors,
              ...action.errors,
            ],
          },
        });
      case types.CLEAR_LOGIN_ERRORS:
        return update(state, {
          errors: {
            $set: [],
          },
        });
      case types.LOGOUT_USER:
        return update(state, {
          loggedInUser: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default loginReducer;
