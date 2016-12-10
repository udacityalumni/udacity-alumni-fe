import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('AdminDashboard actions', () => {
  describe('Default Action', () => {
    it('should have a type of ADMIN_DASHBOARD_SET_SORT_OPTIONS', () => {
      const index = 2;
      const ascending = true;
      const expected = {
        type: types.ADMIN_DASHBOARD_SET_SORT_OPTIONS,
        index,
        ascending,
      };
      expect(actions.setSortOptions(index, ascending)).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_SET_ACTIVE_TAB', () => {
      const tab = 2;
      const expected = {
        type: types.ADMIN_DASHBOARD_SET_ACTIVE_TAB,
        tab,
      };
      expect(actions.setActiveTab(tab)).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_SET_USERS', () => {
      const users = [{}, {}];
      const expected = {
        type: types.ADMIN_DASHBOARD_SET_USERS,
        users,
      };
      expect(actions.setUsers(users)).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_SET_ARTICLES', () => {
      const articles = [{}, {}];
      const expected = {
        type: types.ADMIN_DASHBOARD_SET_ARTICLES,
        articles,
      };
      expect(actions.setArticles(articles)).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_SET_USERS_PAGE', () => {
      const page = 1;
      const expected = {
        type: types.ADMIN_DASHBOARD_SET_USERS_PAGE,
        page,
      };
      expect(actions.setUsersPage(page)).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_SET_ARTICLES_PAGE', () => {
      const page = 1;
      const expected = {
        type: types.ADMIN_DASHBOARD_SET_ARTICLES_PAGE,
        page,
      };
      expect(actions.setArticlesPage(page)).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_SET_USER_EDITING', () => {
      const index = 2;
      const expected = {
        type: types.ADMIN_DASHBOARD_SET_USER_EDITING,
        index,
      };
      expect(actions.setUserEditing(index)).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_CLEAR_USER_EDITING', () => {
      const expected = {
        type: types.ADMIN_DASHBOARD_CLEAR_USER_EDITING,
      };
      expect(actions.clearUserEditing()).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_TOGGLE_ASIDE', () => {
      const expected = {
        type: types.ADMIN_DASHBOARD_TOGGLE_ASIDE,
      };
      expect(actions.toggleAside()).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_SET_ERROR', () => {
      const error = new Error('Oopsies');
      const expected = {
        type: types.ADMIN_DASHBOARD_SET_ERROR,
        error,
      };
      expect(actions.setDashboardError(error)).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_CLEAR_ERROR', () => {
      const expected = {
        type: types.ADMIN_DASHBOARD_CLEAR_ERROR,
      };
      expect(actions.clearDashboardError()).toEqual(expected);
    });
  });
});
