import expect from 'expect';
import signupReducer, { initialState } from '../reducer';

describe('signupReducer', () => {
  it('returns the initial state', () => {
    expect(
      signupReducer(undefined, {})
    ).toEqual(initialState);
  });
});
