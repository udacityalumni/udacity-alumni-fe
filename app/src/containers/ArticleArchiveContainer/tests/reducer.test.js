import expect from 'expect';
import * as types from '../constants';
import articleArchiveReducer, { initialState } from '../reducer';

describe('articleArchiveReducer', () => {
  it('returns the initial state', () => {
    expect(
      articleArchiveReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for ARCHIVE_SET_TAG', () => {
    const tag = 'Hello';
    const stateBefore = {
      tag: null,
    };
    const stateAfter = {
      tag,
    };
    expect(
      articleArchiveReducer(stateBefore, {
        type: types.ARCHIVE_SET_TAG,
        tag,
      })
    ).toEqual(stateAfter);
  });
});
