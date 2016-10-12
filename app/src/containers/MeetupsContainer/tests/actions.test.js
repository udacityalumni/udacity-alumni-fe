import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Meetups actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.MEETUPS_DEFAULT_ACTION,
      };
      expect(actions.meetupsDefaultAction()).toEqual(expected);
    });
  });
});
