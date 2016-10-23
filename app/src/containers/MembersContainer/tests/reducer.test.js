import expect from 'expect';
import membersReducer, { initialState } from '../reducer';

describe('membersReducer', () => {
  it('returns the initial state', () => {
    expect(
      membersReducer(undefined, {})
    ).toEqual(initialState);
  });
});
