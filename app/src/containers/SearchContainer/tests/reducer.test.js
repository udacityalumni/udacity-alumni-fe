import expect from 'expect';
import searchReducer, { initialState } from '../reducer';

describe('searchReducer', () => {
  it('returns the initial state', () => {
    expect(
      searchReducer(undefined, {})
    ).toEqual(initialState);
  });
});
