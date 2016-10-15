import expect from 'expect';
import mentorshipReducer, { initialState } from '../reducer';

describe('mentorshipReducer', () => {
  it('returns the initial state', () => {
    expect(
      mentorshipReducer(undefined, {})
    ).toEqual(initialState);
  });
});
