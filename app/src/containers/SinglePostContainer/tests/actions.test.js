import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('SinglePost actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.SINGLEPOST_DEFAULT_ACTION,
      };
      expect(actions.singlePostDefaultAction()).toEqual(expected);
    });
  });
});
