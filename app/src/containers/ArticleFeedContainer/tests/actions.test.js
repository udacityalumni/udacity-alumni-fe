import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('ArticleFeed actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.ARTICLEFEED_DEFAULT_ACTION,
      };
      expect(actions.articleFeedDefaultAction()).toEqual(expected);
    });
  });
});
