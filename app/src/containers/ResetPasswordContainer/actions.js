import * as types from './constants';

// resetPasswordRequestInitiation :: None -> {Action}
export const resetPasswordRequestInitiation = () => ({
  type: types.RESET_PASSWORD_REQUEST_INITIATION,
});

// resetPasswordRequestSuccess :: None -> {Action}
export const resetPasswordRequestSuccess = (message) => ({
  type: types.RESET_PASSWORD_REQUEST_SUCCESS,
  message,
});

// resetPasswordRequestFailure :: Object -> {Action}
export const resetPasswordRequestFailure = (error) => ({
  type: types.RESET_PASSWORD_REQUEST_FAILURE,
  error,
});

export const resetPasswordClearError = () => ({
  type: types.RESET_PASSWORD_CLEAR_ERROR,
});

export const resetPasswordClearMessage = () => ({
  type: types.RESET_PASSWORD_CLEAR_MESSAGE,
});
