import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Search actions', () => {
  it('should handle SEARCH_ARTICLES_INITIATION', () => {
    const expected = {
      type: types.SEARCH_ARTICLES_INITIATION,
    };
    expect(
      actions.loadSearchArticlesInitiation()
    ).toEqual(expected);
  });
  it('should handle SEARCH_ARTICLES_SUCCESS', () => {
    const articles = [];
    const expected = {
      type: types.SEARCH_ARTICLES_SUCCESS,
      articles,
    };
    expect(
      actions.loadSearchArticlesSuccess(articles)
    ).toEqual(expected);
  });
  it('should handle SEARCH_ARTICLES_FAILURE', () => {
    const error = 'Error';
    const expected = {
      type: types.SEARCH_ARTICLES_FAILURE,
      error,
    };
    expect(
      actions.loadSearchArticlesFailure(error)
    ).toEqual(expected);
  });
  it('should handle CLEAR_SEARCH_ERROR', () => {
    const expected = {
      type: types.CLEAR_SEARCH_ERROR,
    };
    expect(
      actions.clearSearchError()
    ).toEqual(expected);
  });
});
