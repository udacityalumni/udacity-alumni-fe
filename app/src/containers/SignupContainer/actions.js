import * as types from './constants';

// signupRequestInitiation :: None -> Action
export const signupRequestInitiation = () => ({
  type: types.SIGNUP_REQUEST_INITIATION,
});

// signupRequestSuccess :: JSON -> Action
export const signupRequestSuccess = (user) => ({
  type: types.SIGNUP_REQUEST_SUCCESS,
  user,
});

// signupRequestFailure :: Err -> Action
export const signupRequestFailure = (error) => ({
  type: types.SIGNUP_REQUEST_FAILURE,
  error,
});

// TODO: Get rid of this and actually hit the API.
const fakeLatency = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });

export const submitSignupRequest = () =>
  (dispatch) => {
    dispatch(
      signupRequestInitiation()
    );
    // Hit the api here .then((res) => {...})
    fakeLatency().then(() => {
      // Need to handle the response
      // For now, just throw
      throw new Error('The app is not hooked up to the api yet, sadly 😕');
    }).catch((err) => {
      dispatch(
        signupRequestFailure(err.message)
      );
    });
  };

// clearSignupError :: None -> Action
export const clearSignupError = (index) => ({
  type: types.CLEAR_SIGNUP_ERROR,
  index,
});
