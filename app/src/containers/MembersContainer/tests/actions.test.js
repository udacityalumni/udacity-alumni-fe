import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Members actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.MEMBERS_DEFAULT_ACTION,
      };
      expect(actions.membersDefaultAction()).toEqual(expected);
    });
  });
});
