import expect from 'expect';
import meetupsReducer, { initialState } from '../reducer';

describe('meetupsReducer', () => {
  it('returns the initial state', () => {
    expect(
      meetupsReducer(undefined, {})
    ).toEqual(initialState);
  });
});
