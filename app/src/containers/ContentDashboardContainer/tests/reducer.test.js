import expect from 'expect';
import contentDashboardReducer, { initialState } from '../reducer';

describe('contentDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(
      contentDashboardReducer(undefined, {})
    ).toEqual(initialState);
  });
});
