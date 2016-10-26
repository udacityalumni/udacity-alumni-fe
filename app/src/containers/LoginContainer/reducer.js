import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  error: null,
  isLoading: false,
  message: null,
  user: null,
  forgotPassword: {
    isShowingModal: false,
    emailInput: null,
  },
};

const loginReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.FORGOT_PASSWORD_SET_EMAIL_INPUT:
        return update(state, {
          forgotPassword: {
            emailInput: {
              $set: action.input,
            },
          },
        });
      case types.LOGIN_INITIATE_REQUEST:
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
          user: {
            $set: action.user,
          },
        });
      case types.LOGIN_REQUEST_FAILURE:
        return update(state, {
          isLoading: {
            $set: false,
          },
          error: {
            $set: action.error,
          },
        });
      case types.LOGIN_CLEAR_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      case types.LOGIN_SET_MESSAGE:
        return update(state, {
          message: {
            $set: action.message,
          },
        });
      case types.LOGIN_CLEAR_MESSAGE:
        return update(state, {
          message: {
            $set: null,
          },
        });
      case types.LOGIN_TOGGLE_FORGOT_PASSWORD:
        return update(state, {
          forgotPassword: {
            isShowingModal: {
              $set: !state.forgotPassword.isShowingModal,
            },
          },
        });
      default:
        return state;
    }
  };

export default loginReducer;
