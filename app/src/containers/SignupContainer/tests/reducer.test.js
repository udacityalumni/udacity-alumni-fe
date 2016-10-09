import * as types from '../constants';
import expect from 'expect';
import signupReducer, { initialState } from '../reducer';

describe('signupReducer', () => {
  it('should return the initial state', () => {
    expect(
      signupReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for SIGNUP_REQUEST_INITIATION', () => {
    const stateBefore = {
      isLoading: false,
    };
    const stateAfter = {
      isLoading: true,
    };
    expect(
      signupReducer(stateBefore, {
        type: types.SIGNUP_REQUEST_INITIATION,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for SIGNUP_REQUEST_SUCCESS', () => {
    const user = {
      name: 'Ryan Collins',
      avatar: 'https://github.com/avatar.png',
    };
    const stateBefore = {
      isLoading: true,
      loggedInUser: null,
    };
    const stateAfter = {
      isLoading: false,
      loggedInUser: user,
    };
    expect(
      signupReducer(stateBefore, {
        type: types.SIGNUP_REQUEST_SUCCESS,
        user,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for SIGNUP_REQUEST_FAILURE', () => {
    const error = new Error('An error has occured');
    const stateBefore = {
      isLoading: true,
      error: null,
    };
    const stateAfter = {
      isLoading: false,
      error: error.message,
    };
    expect(
      signupReducer(stateBefore, {
        type: types.SIGNUP_REQUEST_FAILURE,
        error: error.message,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CLEAR_SIGNUP_ERROR', () => {
    const stateBefore = {
      error: 'an error',
    };
    const stateAfter = {
      error: null,
    };
    expect(
      signupReducer(stateBefore, {
        type: types.CLEAR_SIGNUP_ERROR,
      })
    ).toEqual(stateAfter);
  });
});
