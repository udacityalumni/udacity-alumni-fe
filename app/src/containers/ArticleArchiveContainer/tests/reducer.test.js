import expect from 'expect';
import articleArchiveReducer, { initialState } from '../reducer';

describe('articleArchiveReducer', () => {
  it('returns the initial state', () => {
    expect(
      articleArchiveReducer(undefined, {})
    ).toEqual(initialState);
  });
});
