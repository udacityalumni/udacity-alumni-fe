import expect from 'expect';
import articleFeedReducer, { initialState } from '../reducer';

describe('articleFeedReducer', () => {
  it('returns the initial state', () => {
    expect(
      articleFeedReducer(undefined, {})
    ).toEqual(initialState);
  });
});
