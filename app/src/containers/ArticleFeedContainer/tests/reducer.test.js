import expect from 'expect';
import articleFeedReducer, { initialState } from '../reducer';
import * as types from '../constants';

describe('articleFeedReducer', () => {
  it('returns the initial state', () => {
    expect(
      articleFeedReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for ARTICLE_FEED_INCREMENT_CURRENT', () => {
    const stateBefore = {
      current: 3,
    };
    const stateAfter = {
      current: 6,
    };
    expect(
      articleFeedReducer(stateBefore, {
        type: types.ARTICLE_FEED_INCREMENT_CURRENT,
      })
    ).toEqual(stateAfter);
  });
});
