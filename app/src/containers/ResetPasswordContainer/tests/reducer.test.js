import expect from 'expect';
import resetPasswordReducer, { initialState } from '../reducer';

describe('resetPasswordReducer', () => {
  it('returns the initial state', () => {
    expect(
      resetPasswordReducer(undefined, {})
    ).toEqual(initialState);
  });
});
