import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('ArticleFeed actions', () => {
  it('should handle ARTICLE_FEED_INCREMENT_CURRENT', () => {
    const expected = {
      type: types.ARTICLE_FEED_INCREMENT_CURRENT,
    };
    expect(
      actions.articleFeedIncrementCurrent()
    ).toEqual(expected);
  });
});
