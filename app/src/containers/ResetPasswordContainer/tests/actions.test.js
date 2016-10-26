import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('ResetPassword actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.RESETPASSWORD_DEFAULT_ACTION,
      };
      expect(actions.resetPasswordDefaultAction()).toEqual(expected);
    });
  });
});
