import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('SingleArticle actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.SINGLEARTICLE_DEFAULT_ACTION,
      };
      expect(actions.singleArticleDefaultAction()).toEqual(expected);
    });
  });
});
