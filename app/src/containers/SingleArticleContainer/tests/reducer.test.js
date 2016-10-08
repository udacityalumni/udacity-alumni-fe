import expect from 'expect';
import * as types from '../constants';
import singleArticleReducer, { initialState } from '../reducer';

describe('singleArticleReducer', () => {
  it('returns the initial state', () => {
    expect(
      singleArticleReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer when ARTICLE_INITIATION', () => {
    const stateBefore = {
      isLoading: false,
    };
    const stateAfter = {
      isLoading: true,
    };
    expect(
      singleArticleReducer(stateBefore, {
        type: types.ARTICLE_INITIATION,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer when ARTICLE_SUCCESS', () => {
    const article = {
      dummyProp: 'Foobar',
    };
    const stateBefore = {
      isLoading: true,
      article: null,
    };
    const stateAfter = {
      isLoading: false,
      article,
    };
    expect(
      singleArticleReducer(stateBefore, {
        type: types.ARTICLE_SUCCESS,
        article,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer when ARTICLE_FAILURE', () => {
    const error = 'An error has unfortunately occured';
    const stateBefore = {
      isLoading: true,
      errors: null,
    };
    const stateAfter = {
      isLoading: false,
      errors: [error],
    };
    expect(
      singleArticleReducer(stateBefore, {
        type: types.ARTICLE_FAILURE,
        errors: [error],
      })
    ).toEqual(stateAfter);
  });
});
