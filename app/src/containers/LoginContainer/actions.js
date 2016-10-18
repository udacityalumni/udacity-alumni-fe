import * as types from './constants';
import 'whatwg-fetch';
const baseUrl = 'https://udacity-api.herokuapp.com/api/v1/';
const sessionsUrl = `${baseUrl}sessions`;
const usersUrl = `${baseUrl}users`;

// loginInitiateRequest :: None -> Action
export const loginInitiateRequest = () => ({
  type: types.LOGIN_INITIATE_REQUEST,
});

// loginRequestSuccess :: JSON -> Action
export const loginRequestSuccess = (user) => ({
  type: types.LOGIN_REQUEST_SUCCESS,
  user,
});

// loginRequestFailure :: [Err] -> Action
export const loginRequestFailure = (errors) => ({
  type: types.LOGIN_REQUEST_FAILURE,
  errors,
});

// loginClearError :: None -> Action
export const loginClearError = (index) => ({
  type: types.LOGIN_CLEAR_ERROR,
  index,
});

export const loginSetMessage = (message) => ({
  type: types.LOGIN_SET_MESSAGE,
  message,
});

export const loginClearMessage = () => ({
  type: types.LOGIN_CLEAR_MESSAGE,
});

class SessionParams {
  constructor() {
    this.toJson = this.toJson.bind(this);
    const args = arguments[0];
    this.email = args.email;
    this.password = args.password;
    this.valid = this.email && this.password;
  }
  toJson() {
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

export const performLogin = (params) =>
  (dispatch) => {
    dispatch(loginInitiateRequest());
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const session = new SessionParams(params);
    if (!session.valid) {
      throw new Error('A valid email and password are required');
    }
    const body = session.toJson();
    fetch(sessionsUrl, {
      method: 'POST',
      headers,
      body,
    })
    .then(res => res.json())
    .then(res => {
      const token = res.session.auth_token;
      if (!token) {
        throw new Error('The request failed.');
      }
      persistAuthToken(token).then(t => t);
      return token;
    })
    .then(token => {
      const userHeaders = new Headers();
      userHeaders.append('Content-Type', 'application/json');
      userHeaders.append('Authorization', token);
      return fetch(usersUrl, {
        method: 'GET',
        headers: userHeaders,
      });
    })
    .then(res => res.json())
    .then(res => {
      if (!res.user) {
        throw new Error(
          'Unexpected response from server.  ' +
          'Please check your password and try again.'
        );
      }
      return res.user;
    })
    .then(user => {
      dispatch(
        loginRequestSuccess(user)
      );
    })
    .then(() => {
      const message = 'Login was successful!  Redirecting to your profile.';
      dispatch(
        loginSetMessage(message)
      );
    })
    .catch(err => {
      dispatch(
        loginRequestFailure([err])
      );
    });
  };
