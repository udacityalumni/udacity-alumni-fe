import expect from 'expect';
import publicUserProfileReducer, { initialState } from '../reducer';

describe('publicUserProfileReducer', () => {
  it('returns the initial state', () => {
    expect(
      publicUserProfileReducer(undefined, {})
    ).toEqual(initialState);
  });
});
