import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Login actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.LOGIN_DEFAULT_ACTION,
      };
      expect(actions.loginDefaultAction()).toEqual(expected);
    });
  });
});
