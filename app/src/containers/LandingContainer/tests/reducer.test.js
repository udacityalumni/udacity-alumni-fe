import expect from 'expect';
import landingReducer, { initialState } from '../reducer';
import * as types from '../constants';

describe('landingReducer', () => {
  it('should return the initial state', () => {
    expect(
      landingReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle FEATURED_ARTICLES_INITIATION', () => {
    const stateBefore = {
      isLoading: false,
    };
    const stateAfter = {
      isLoading: true,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.FEATURED_ARTICLES_INITIATION,
      })
    ).toEqual(stateAfter);
  });
  it('should handle FEATURED_ARTICLES_SUCCESS', () => {
    const featuredArticles = [
      {
        id: 1,
        title: 'Hello World',
      },
    ];
    const stateBefore = {
      isLoading: true,
      featuredArticles: null,
    };
    const stateAfter = {
      isLoading: false,
      featuredArticles,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.FEATURED_ARTICLES_SUCCESS,
        articles: featuredArticles,
      })
    ).toEqual(stateAfter);
  });
  it('should handle FEATURE_ARTICLES_FAILURE', () => {
    const error = new Error('An error has occured');
    const stateBefore = {
      isLoading: true,
      error: null,
    };
    const stateAfter = {
      isLoading: false,
      error,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.FEATURE_ARTICLES_FAILURE,
        error,
      })
    ).toEqual(stateAfter);
  });
});
