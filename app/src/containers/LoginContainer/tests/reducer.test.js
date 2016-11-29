import expect from 'expect';
import loginReducer, { initialState } from '../reducer';
import * as types from '../constants';

describe('loginReducer', () => {
  it('returns the initial state', () => {
    expect(
      loginReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle LOGIN_INITIATE_REQUEST', () => {
    const stateBefore = {
      isLoading: false,
    };
    const stateAfter = {
      isLoading: true,
    };
    expect(
      loginReducer(stateBefore, {
        type: types.LOGIN_INITIATE_REQUEST,
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
      user: null,
    };
    const stateAfter = {
      isLoading: false,
      user,
    };
    expect(
      loginReducer(stateBefore, {
        type: types.LOGIN_REQUEST_SUCCESS,
        user,
      })
    ).toEqual(stateAfter);
  });
  describe('login container error handling', () => {
    const error = new Error('Oops');
    it('should handle LOGIN_REQUEST_FAILURE', () => {
      const stateBefore = {
        isLoading: true,
        error: [],
      };
      const stateAfter = {
        isLoading: false,
        error,
      };
      expect(
        loginReducer(stateBefore, {
          type: types.LOGIN_REQUEST_FAILURE,
          error,
        })
      ).toEqual(stateAfter);
    });
    it('should handle LOGIN_CLEAR_ERROR', () => {
      const stateBefore = {
        error: new Error('oops'),
      };
      const stateAfter = {
        error: null,
      };
      expect(
        loginReducer(stateBefore, {
          type: types.LOGIN_CLEAR_ERROR,
        })
      ).toEqual(stateAfter);
    });
  });
  describe('loginReducer message handling', () => {
    it('should handle LOGIN_SET_MESSAGE', () => {
      const message = 'Hurray, it works';
      const stateBefore = {
        message: null,
      };
      const stateAfter = {
        message,
      };
      expect(
        loginReducer(stateBefore, {
          type: types.LOGIN_SET_MESSAGE,
          message,
        })
      ).toEqual(stateAfter);
    });
    it('should handle LOGIN_CLEAR_MESSAGE', () => {
      const message = 'Hurray, it works';
      const stateBefore = {
        message,
      };
      const stateAfter = {
        message: null,
      };
      expect(
        loginReducer(stateBefore, {
          type: types.LOGIN_CLEAR_MESSAGE,
        })
      ).toEqual(stateAfter);
    });
  });
});
