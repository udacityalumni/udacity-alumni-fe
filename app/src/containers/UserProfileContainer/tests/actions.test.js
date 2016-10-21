import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('UserProfile actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.USERPROFILE_DEFAULT_ACTION,
      };
      expect(actions.userProfileDefaultAction()).toEqual(expected);
    });
  });
});
