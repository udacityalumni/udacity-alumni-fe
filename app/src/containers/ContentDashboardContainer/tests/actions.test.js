import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('ContentDashboard actions', () => {
  it('should have a type of DASHBOARD_ARTICLES_INITIATION', () => {
    const expected = {
      type: types.DASHBOARD_ARTICLES_INITIATION,
    };
    expect(
      actions.loadDashboardArticlesInitiation()
    ).toEqual(expected);
  });
  it('should have a type of DASHBOARD_ARTICLES_SUCCESS', () => {
    const expected = {
      type: types.DASHBOARD_ARTICLES_SUCCESS,
      articles: [],
    };
    expect(
      actions.loadDashboardArticlesSuccess([])
    ).toEqual(expected);
  });
  it('should have a type of DASHBOARD_ARTICLES_FAILURE', () => {
    const error = new Error('An error has occured');
    const expected = {
      type: types.DASHBOARD_ARTICLES_FAILURE,
      error,
    };
    expect(
      actions.loadDashboardArticlesFailure(error)
    ).toEqual(expected);
  });
  it('should have a type of CLEAR_DASHBOARD_ERROR', () => {
    const expected = {
      type: types.CLEAR_DASHBOARD_ERROR,
    };
    expect(
      actions.clearDashboardError()
    ).toEqual(expected);
  });
});
