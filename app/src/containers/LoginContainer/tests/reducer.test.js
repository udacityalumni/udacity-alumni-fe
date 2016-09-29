import expect from 'expect';
import loginReducer, { initialState } from '../reducer';
import * as types from '../constants';

describe('loginReducer', () => {
  it('returns the initial state', () => {
    expect(
      loginReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle START_LOGIN_REQUEST', () => {
    const stateBefore = {
      isLoading: false,
    };
    const stateAfter = {
      isLoading: true,
    };
    expect(
      loginReducer(stateBefore, {
        type: types.START_LOGIN_REQUEST,
      })
    ).toEqual(stateAfter);
  });
  it('should handle LOGIN_REQUEST_SUCCESS', () => {
    const user = {
      name: 'Ryan Collins',
      avatar: 'https://github.com/ryanccollins',
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
      loginReducer(stateBefore, {
        type: types.LOGIN_REQUEST_SUCCESS,
        user,
      })
    ).toEqual(stateAfter);
  });
  it('should handle LOGOUT_USER', () => {
    const loggedInUser = {
      name: 'Ryan Collins',
      avatar: 'https://github.com/ryanccollins',
    };
    const stateBefore = {
      loggedInUser,
    };
    const stateAfter = {
      loggedInUser: null,
    };
    expect(
      loginReducer(stateBefore, {
        type: types.LOGOUT_USER,
      })
    ).toEqual(stateAfter);
  });
  describe('login container error handling', () => {
    const errors = [
      { message: 'An error has occured' },
      { message: 'Another error has occured' },
    ];
    it('should handle LOGIN_REQUEST_FAILURE', () => {
      const stateBefore = {
        isLoading: true,
        errors: [],
      };
      const stateAfter = {
        isLoading: false,
        errors,
      };
      expect(
        loginReducer(stateBefore, {
          type: types.LOGIN_REQUEST_FAILURE,
          errors,
        })
      ).toEqual(stateAfter);
    });
    it('should handle CLEAR_LOGIN_ERRORS', () => {
      const stateBefore = {
        errors,
      };
      const stateAfter = {
        errors: [],
      };
      expect(
        loginReducer(stateBefore, {
          type: types.CLEAR_LOGIN_ERRORS,
        })
      ).toEqual(stateAfter);
    });
  });
});
