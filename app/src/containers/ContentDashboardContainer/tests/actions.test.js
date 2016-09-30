import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('ContentDashboard actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.CONTENTDASHBOARD_DEFAULT_ACTION,
      };
      expect(actions.contentDashboardDefaultAction()).toEqual(expected);
    });
  });
});
