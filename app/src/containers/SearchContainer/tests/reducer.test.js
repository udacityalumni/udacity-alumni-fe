import expect from 'expect';
import searchReducer, { initialState } from '../reducer';
import * as types from '../constants';

describe('searchReducer', () => {
  it('should return the initial state', () => {
    expect(
      searchReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for SEARCH_ARTICLES_INITIATION', () => {
    const stateBefore = {
      isLoading: false,
    };
    const stateAfter = {
      isLoading: true,
    };
    expect(
      searchReducer(stateBefore, {
        type: types.SEARCH_ARTICLES_INITIATION,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for SEARCH_ARTICLES_SUCCESS', () => {
    const articles = [
      {
        id: 1,
        title: 'Hello World',
      },
    ];
    const stateBefore = {
      isLoading: true,
      articles: null,
    };
    const stateAfter = {
      isLoading: false,
      articles,
    };
    expect(
      searchReducer(stateBefore, {
        type: types.SEARCH_ARTICLES_SUCCESS,
        articles,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for SEARCH_ARTICLES_FAILURE', () => {
    const error = 'An error has occured';
    const stateBefore = {
      isLoading: true,
      error: null,
    };
    const stateAfter = {
      isLoading: false,
      error,
    };
    expect(
      searchReducer(stateBefore, {
        type: types.SEARCH_ARTICLES_FAILURE,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CLEAR_SEARCH_ERROR', () => {
    const error = 'An error has occured';
    const stateBefore = {
      error,
    };
    const stateAfter = {
      error: null,
    };
    expect(
      searchReducer(stateBefore, {
        type: types.CLEAR_SEARCH_ERROR,
      })
    ).toEqual(stateAfter);
  });
});
