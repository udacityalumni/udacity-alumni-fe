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
      isLoading: false,
    };
    const stateAfter = {
      isLoading: true,
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
      isLoading: true,
      error: null,
    };
    const stateAfter = {
      isLoading: false,
      error,
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
      isLoading: true,
      message: null,
    };
    const stateAfter = {
      isLoading: false,
      message,
      modal: {
        isShowing: false,
        status: 0,
        spotlighted: false,
        selectedTags: [],
        featureImage: null,
      },
    };
    expect(
      cmsEditorReducer(stateBefore, {
        type: types.SUBMIT_ARTICLE_SUCCESS,
        message,
      })
    ).toEqual(stateAfter);
  });
  it('should handle CLEAR_CMS_ERROR', () => {
    const stateBefore = {
      error: new Error('oops'),
    };
    const stateAfter = {
      error: null,
    };
    expect(
      cmsEditorReducer(stateBefore, {
        type: types.CLEAR_CMS_ERROR,
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
