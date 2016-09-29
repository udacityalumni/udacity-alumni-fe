import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Signup actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.SIGNUP_DEFAULT_ACTION,
      };
      expect(actions.signupDefaultAction()).toEqual(expected);
    });
  });
});
