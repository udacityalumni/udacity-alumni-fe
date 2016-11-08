import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Login actions', () => {
  describe('Default Action', () => {
    it('should have a type of LOGIN_INITIATE_REQUEST', () => {
      const expected = {
        type: types.LOGIN_INITIATE_REQUEST,
      };
      expect(actions.loginInitiateRequest()).toEqual(expected);
    });
    it('should have a type of LOGIN_REQUEST_SUCCESS', () => {
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
    it('should have a type of LOGIN_REQUEST_FAILURE', () => {
      const error = new Error('Another error has occured');
      const expected = {
        type: types.LOGIN_REQUEST_FAILURE,
        error,
      };
      expect(actions.loginRequestFailure(error)).toEqual(expected);
    });
    it('should have a type of LOGIN_CLEAR_ERROR', () => {
      const expected = {
        type: types.LOGIN_CLEAR_ERROR,
      };
      expect(actions.loginClearError()).toEqual(expected);
    });
    it('should have a type of LOGIN_SET_MESSAGE', () => {
      const message = 'Logged in, woohoo!';
      const expected = {
        type: types.LOGIN_SET_MESSAGE,
        message,
      };
      expect(
        actions.loginSetMessage(message)
      ).toEqual(expected);
    });
    it('should have a type of LOGIN_CLEAR_MESSAGE', () => {
      const expected = {
        type: types.LOGIN_CLEAR_MESSAGE,
      };
      expect(
        actions.loginClearMessage()
      ).toEqual(expected);
    });
  });
});
