import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Login actions', () => {
  describe('Default Action', () => {
    it('has a type of START_LOGIN_REQUEST', () => {
      const expected = {
        type: types.START_LOGIN_REQUEST,
      };
      expect(actions.startLoginRequest()).toEqual(expected);
    });
    it('has a type of LOGIN_REQUEST_SUCCESS', () => {
      const user = {
        name: 'Ryan Collins',
        avatar: 'https://github.com/avatar.png',
      };
      const expected = {
        type: types.LOGIN_REQUEST_SUCCESS,
        user,
      };
      expect(actions.loginRequestSuccess(user)).toEqual(expected);
    });
    it('has a type of LOGIN_REQUEST_FAILURE', () => {
      const errors = [
        new Error('An error has occured'),
        new Error('Another error has occured'),
      ];
      const expected = {
        type: types.LOGIN_REQUEST_FAILURE,
        errors,
      };
      expect(actions.loginRequestFailure(errors)).toEqual(expected);
    });
    it('has a type of LOGOUT_USER', () => {
      const expected = {
        type: types.LOGOUT_USER,
      };
      expect(actions.logoutUser()).toEqual(expected);
    });
    it('has a type of CLEAR_LOGIN_ERROR', () => {
      const index = 1;
      const expected = {
        type: types.CLEAR_LOGIN_ERROR,
        index,
      };
      expect(actions.clearLoginError(index)).toEqual(expected);
    });
  });
});
