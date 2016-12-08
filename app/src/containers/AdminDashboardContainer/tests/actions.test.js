import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('AdminDashboard actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.ADMINDASHBOARD_DEFAULT_ACTION,
      };
      expect(actions.adminDashboardDefaultAction()).toEqual(expected);
    });
  });
});
