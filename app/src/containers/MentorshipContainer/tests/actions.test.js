import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Mentorship actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.MENTORSHIP_DEFAULT_ACTION,
      };
      expect(actions.mentorshipDefaultAction()).toEqual(expected);
    });
  });
});
