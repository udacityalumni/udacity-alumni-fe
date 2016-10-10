import * as types from './constants';
import 'whatwg-fetch';
const baseUrl = 'https://udacity-alumni-api.herokuapp.com/api/v1/';
const sessionsUrl = `${baseUrl}sessions`;
const usersUrl = `${baseUrl}users`;

export const signupRequestInitiation = () => ({
  type: types.SIGNUP_REQUEST_INITIATION,
});

export const signupRequestSuccess = (user) => ({
  type: types.SIGNUP_REQUEST_SUCCESS,
  user,
});

export const signupRequestFailure = (error) => ({
  type: types.SIGNUP_REQUEST_FAILURE,
  error,
});

export const clearSignupError = () => ({
  type: types.CLEAR_SIGNUP_ERROR,
});

class SignupParams {
  constructor() {
    this.toJson = this.toJson.bind(this);
    const args = arguments[0];
    this.password = args.password;
    this.email = args.email;
    this.passwordConfirmation = args.passwordConfirmation;
    this.name = args.name;
  }
  toJson() {
    const body = {
      email: this.email,
      password: this.password,
      password_confirmation: this.passwordConfirmation,
      name: this.name,
    };
    return JSON.stringify(body);
  }
}

export const handleSignup = (params) =>
  (dispatch) => {
    dispatch(
      signupRequestInitiation()
    );
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const signup = new SignupParams(params);
    fetch(usersUrl, {
      method: 'POST',
      headers,
      body: signup.toJson(),
    })
    .then(res => res.json())
    .then(json => {
      if (!json.user || json.error) {
        throw new Error(`An error has occured ${json.error}`);
      }
      return json.user;
    })
    .then(user => {
      dispatch(
        signupRequestSuccess(user)
      );
    })
    .catch(err => {
      dispatch(
        signupRequestFailure(err.message)
      );
    });
  };
