import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('ArticleArchive actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.ARTICLEARCHIVE_DEFAULT_ACTION,
      };
      expect(actions.articleArchiveDefaultAction()).toEqual(expected);
    });
  });
});