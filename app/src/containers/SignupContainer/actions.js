import * as types from './constants';
import 'whatwg-fetch';
const baseUrl = 'https://udacity-alumni-api.herokuapp.com/api/v1/';
const sessionsUrl = `${baseUrl}sessions`;
const usersUrl = `${baseUrl}users`;

// signupRequestInitiation :: None -> {Action}
export const signupRequestInitiation = () => ({
  type: types.SIGNUP_REQUEST_INITIATION,
});

// signupRequestSuccess :: JSON -> {Action}
export const signupRequestSuccess = (user) => ({
  type: types.SIGNUP_REQUEST_SUCCESS,
  user,
});

// signupRequestSuccess :: String -> {Action}
export const signupRequestFailure = (error) => ({
  type: types.SIGNUP_REQUEST_FAILURE,
  error,
});

// clearSignupError :: None -> {Action}
export const clearSignupError = () => ({
  type: types.CLEAR_SIGNUP_ERROR,
});

// signupSetMessage :: String -> {Action}
export const signupSetMessage = (message) => ({
  type: types.SIGNUP_SET_MESSAGE,
  message,
});

// signupClearMessage :: None -> {Action}
export const signupClearMessage = () => ({
  type: types.SIGNUP_CLEAR_MESSAGE,
});

class SignupParams {
  constructor() {
    this.toJson = this.toJson.bind(this);
    this.toSignin = this.toSignin.bind(this);
    const args = arguments[0];
    this.password = args.password;
    this.email = args.email;
    this.passwordConfirmation = args.passwordConfirmation;
    this.name = args.name;
  }
  toJson() {
    const body = {
      user: {
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        name: this.name,
      },
    };
    return JSON.stringify(body);
  }
  toSignin() {
    const body = {
      session: {
        email: this.email,
        password: this.password,
      },
    };
    return JSON.stringify(body);
  }
}

const persistAuthToken = (authToken) =>
  new Promise((resolve) => {
    const token = localStorage.setItem('auth_token', authToken);
    resolve(token);
  });

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
      if (!json.user || json.errors) {
        const errors = [];
        Object.keys(json.errors).map((key) => {
          errors.push(json.errors[key]);
        });
        throw new Error(
          `The following error occured: ${Object.keys(json.errors)[0]} ${errors[0]}`
        );
      }
      return json.user;
    })
    .then(user => {
      dispatch(
        signupRequestSuccess(user)
      );
      return user;
    })
    .then(() =>
      fetch(sessionsUrl, {
        method: 'POST',
        headers,
        body: signup.toSignin(),
      })
    )
    .then(res => res.json())
    .then(json => {
      const token = json.session.auth_token;
      if (!token) {
        throw new Error('The request failed, please try again.');
      }
      return persistAuthToken(token).then(t => t);
    })
    .then(() => {
      dispatch(
        signupSetMessage(
          'Signup was successful!  Redirecting to your profile.'
        )
      );
    })
    .catch(err => {
      dispatch(
        signupRequestFailure(err.message)
      );
    });
  };
