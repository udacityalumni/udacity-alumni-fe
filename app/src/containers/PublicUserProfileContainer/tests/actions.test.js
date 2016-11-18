import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('PublicUserProfile actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.PUBLICUSERPROFILE_DEFAULT_ACTION,
      };
      expect(actions.publicUserProfileDefaultAction()).toEqual(expected);
    });
  });
});
