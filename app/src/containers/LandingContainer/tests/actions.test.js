import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Landing actions', () => {
  describe('START_LANDING_LOADING', () => {
    it('should have a type of START_LANDING_LOADING', () => {
      const expected = {
        type: types.START_LANDING_LOADING,
      };
      expect(actions.startLoading()).toEqual(expected);
    });
  });
  describe('STOP_LANDING_LOADING', () => {
    it('should have a type of STOP_LANDING_LOADING', () => {
      const expected = {
        type: types.STOP_LANDING_LOADING,
      };
      expect(actions.stopLoading()).toEqual(expected);
    });
  });
});
