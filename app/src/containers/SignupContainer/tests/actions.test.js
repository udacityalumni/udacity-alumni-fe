import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Signup actions', () => {
  it('should handle SIGNUP_REQUEST_INITIATION', () => {
    const expected = {
      type: types.SIGNUP_REQUEST_INITIATION,
    };
    expect(
      actions.signupRequestInitiation()
    ).toEqual(expected);
  });
  it('should handle SIGNUP_REQUEST_SUCCESS', () => {
    const user = {
      name: 'Ryan Collins',
      avatar: 'https://github.com/avatar.png',
    };
    const expected = {
      type: types.SIGNUP_REQUEST_SUCCESS,
      user,
    };
    expect(
      actions.signupRequestSuccess(user)
    ).toEqual(expected);
  });
  it('should handle SIGNUP_REQUEST_FAILURE', () => {
    const error = new Error('An error has occured');
    const expected = {
      type: types.SIGNUP_REQUEST_FAILURE,
      error: error.message,
    };
    expect(
      actions.signupRequestFailure(error.message)
    ).toEqual(expected);
  });
  it('should handle CLEAR_SIGNUP_ERROR', () => {
    const expected = {
      type: types.CLEAR_SIGNUP_ERROR,
    };
    expect(actions.clearSignupError()).toEqual(expected);
  });
});
