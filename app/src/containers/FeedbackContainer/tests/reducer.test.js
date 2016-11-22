import expect from 'expect';
import feedbackReducer, { initialState } from '../reducer';

describe('feedbackReducer', () => {
  it('returns the initial state', () => {
    expect(
      feedbackReducer(undefined, {})
    ).toEqual(initialState);
  });
});
