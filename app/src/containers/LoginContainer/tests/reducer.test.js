import expect from 'expect';
import loginReducer, { initialState } from '../reducer';

describe('loginReducer', () => {
  it('returns the initial state', () => {
    expect(
      loginReducer(undefined, {})
    ).toEqual(initialState);
  });
});
