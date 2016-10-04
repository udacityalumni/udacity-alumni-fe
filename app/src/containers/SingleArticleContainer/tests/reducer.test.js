import expect from 'expect';
import singleArticleReducer, { initialState } from '../reducer';

describe('singleArticleReducer', () => {
  it('returns the initial state', () => {
    expect(
      singleArticleReducer(undefined, {})
    ).toEqual(initialState);
  });
});
