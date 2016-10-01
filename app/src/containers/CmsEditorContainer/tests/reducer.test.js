import expect from 'expect';
import * as types from '../constants';
import cmsEditorReducer, { initialState } from '../reducer';

describe('cmsEditorReducer', () => {
  it('returns the initial state', () => {
    expect(
      cmsEditorReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle SUBMIT_ARTICLE_INITIATION', () => {
    const stateBefore = {
      isSubmitting: false,
    };
    const stateAfter = {
      isSubmitting: true,
    };
    expect(
      cmsEditorReducer(stateBefore, {
        type: types.SUBMIT_ARTICLE_INITIATION,
      })
    ).toEqual(stateAfter);
  });
  it('should handle SUBMIT_ARTICLE_FAILURE', () => {
    const error = new Error('Ooops');
    const stateBefore = {
      isSubmitting: true,
      errors: null,
    };
    const stateAfter = {
      isSubmitting: false,
      errors: [error],
    };
    expect(
      cmsEditorReducer(stateBefore, {
        type: types.SUBMIT_ARTICLE_FAILURE,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle SUBMIT_ARTICLE_SUCCESS', () => {
    const message = 'Woohoo!';
    const stateBefore = {
      isSubmitting: true,
      message: null,
    };
    const stateAfter = {
      isSubmitting: false,
      message,
    };
    expect(
      cmsEditorReducer(stateBefore, {
        type: types.SUBMIT_ARTICLE_SUCCESS,
        message,
      })
    ).toEqual(stateAfter);
  });
  it('should handle CLEAR_CMS_ERRORS', () => {
    const stateBefore = {
      errors: [new Error('oops')],
    };
    const stateAfter = {
      errors: null,
    };
    expect(
      cmsEditorReducer(stateBefore, {
        type: types.CLEAR_CMS_ERRORS,
      })
    ).toEqual(stateAfter);
  });
  it('should handle CLEAR_CMS_MESSAGE', () => {
    const stateBefore = {
      message: 'Hooray!',
    };
    const stateAfter = {
      message: null,
    };
    expect(
      cmsEditorReducer(stateBefore, {
        type: types.CLEAR_CMS_MESSAGE,
      })
    ).toEqual(stateAfter);
  });
});
