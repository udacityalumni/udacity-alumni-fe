import * as types from './constants';

export const initialState = {
  isLoading: false,
  error: null,
};

const resetPasswordReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.RESET_PASSWORD_REQUEST_INITIATION:
        return {
          ...state,
          isLoading: true,
        };
      case types.RESET_PASSWORD_REQUEST_SUCCESS:
        return {
          ...state,
          isLoading: false,
        };
      case types.RESET_PASSWORD_REQUEST_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      case types.RESET_PASSWORD_CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };

export default resetPasswordReducer;
