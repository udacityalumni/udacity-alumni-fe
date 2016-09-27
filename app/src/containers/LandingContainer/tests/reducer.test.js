import expect from 'expect';
import landingReducer, { initialState } from '../reducer';
import * as types from '../constants';

describe('landingReducer', () => {
  it('should return the initial state', () => {
    expect(
      landingReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle START_LANDING_LOADING', () => {
    const stateBefore = {
      isLoading: false,
    };
    const stateAfter = {
      isLoading: true,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.START_LANDING_LOADING,
      })
    ).toEqual(stateAfter);
  });
  it('should handle STOP_LANDING_LOADING', () => {
    const stateBefore = {
      isLoading: true,
    };
    const stateAfter = {
      isLoading: false,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.STOP_LANDING_LOADING,
      })
    ).toEqual(stateAfter);
  });
});
