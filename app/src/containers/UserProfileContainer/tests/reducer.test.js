import expect from 'expect';
import userProfileReducer, { initialState } from '../reducer';

describe('userProfileReducer', () => {
  it('returns the initial state', () => {
    expect(
      userProfileReducer(undefined, {})
    ).toEqual(initialState);
  });
});
