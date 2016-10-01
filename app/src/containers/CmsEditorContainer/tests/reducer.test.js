import expect from 'expect';
import cmsEditorReducer, { initialState } from '../reducer';

describe('cmsEditorReducer', () => {
  it('returns the initial state', () => {
    expect(
      cmsEditorReducer(undefined, {})
    ).toEqual(initialState);
  });
});
