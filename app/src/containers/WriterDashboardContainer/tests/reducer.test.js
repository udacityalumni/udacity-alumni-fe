import expect from 'expect';
import * as types from '../constants';
import writerDashboardReducer, { initialState } from '../reducer';

describe('writerDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(
      writerDashboardReducer(undefined, {})
    ).toEqual(initialState);
  });
});
