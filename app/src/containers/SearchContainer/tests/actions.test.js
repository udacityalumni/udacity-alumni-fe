import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Search actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.SEARCH_DEFAULT_ACTION,
      };
      expect(actions.searchDefaultAction()).toEqual(expected);
    });
  });
});
