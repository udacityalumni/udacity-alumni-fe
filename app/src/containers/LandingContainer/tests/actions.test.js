import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Landing actions', () => {
  it('should have a type of FEATURED_ARTICLES_INITIATION', () => {
    const expected = {
      type: types.FEATURED_ARTICLES_INITIATION,
    };
    expect(actions.loadFeaturedArticlesInitiation()).toEqual(expected);
  });
  it('should have a type of FEATURE_ARTICLES_FAILURE', () => {
    const error = new Error('An error has occured');
    const errors = [error];
    const expected = {
      type: types.FEATURE_ARTICLES_FAILURE,
      errors,
    };
    expect(
      actions.loadFeaturedArticlesFailure(errors)
    ).toEqual(expected);
  });
  it('should have a type of FEATURED_ARTICLES_SUCCESS', () => {
    const articles = [];
    const expected = {
      type: types.FEATURED_ARTICLES_SUCCESS,
      articles,
    };
    expect(
      actions.loadFeaturedArticlesSuccess(articles)
    ).toEqual(expected);
  });
  it('should handle CLEAR_LANDING_ERRORS', () => {
    const expected = {
      type: types.CLEAR_LANDING_ERRORS,
    };
    expect(
      actions.clearLandingErrors()
    ).toEqual(expected);
  });
});
