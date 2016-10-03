import expect from 'expect';
import singlePostReducer, { initialState } from '../reducer';

describe('singlePostReducer', () => {
  it('returns the initial state', () => {
    expect(
      singlePostReducer(undefined, {})
    ).toEqual(initialState);
  });
});
