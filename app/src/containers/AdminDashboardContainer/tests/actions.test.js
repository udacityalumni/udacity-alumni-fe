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
    it('should have a type of ADMIN_DASHBOARD_CLEAR_MESSAGE', () => {
      const expected = {
        type: types.ADMIN_DASHBOARD_CLEAR_MESSAGE,
      };
      expect(
        actions.clearDashboardMessage()
      ).toEqual(expected);
    });
    it('should have a type of DASHBOARD_DELETE_ARTICLE_FAILURE', () => {
      const error = new Error('oops');
      const expected = {
        type: types.DASHBOARD_DELETE_ARTICLE_FAILURE,
        error,
      };
      expect(
        actions.dashboardDeleteArticleFailure(error)
      ).toEqual(expected);
    });
    it('should have a type of DASHBOARD_DELETE_ARTICLE_SUCCESS', () => {
      const message = 'yay';
      const expected = {
        type: types.DASHBOARD_DELETE_ARTICLE_SUCCESS,
        message,
      };
      expect(
        actions.dashboardDeleteArticleSuccess(message)
      ).toEqual(expected);
    });
    it('should have a type of DASHBOARD_DELETE_ARTICLE_INITIATION', () => {
      const expected = {
        type: types.DASHBOARD_DELETE_ARTICLE_INITIATION,
      };
      expect(
        actions.dashboardDeleteArticleInitiation()
      ).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_CANCEL_ARTICLE_DELETION', () => {
      const expected = {
        type: types.ADMIN_DASHBOARD_CANCEL_ARTICLE_DELETION,
      };
      expect(
        actions.cancelDeletingArticle()
      ).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_OPEN_CONFIRMATION_MODAL', () => {
      const id = 1;
      const expected = {
        type: types.ADMIN_DASHBOARD_OPEN_CONFIRMATION_MODAL,
        id,
      };
      expect(
        actions.openConfirmationModal(id)
      ).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_EDIT_AVATAR_INPUT', () => {
      const input = 'Foo';
      const expected = {
        type: types.ADMIN_DASHBOARD_EDIT_AVATAR_INPUT,
        input,
      };
      expect(
        actions.editAvatarInput(input)
      ).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_CLOSE_MODAL', () => {
      const expected = {
        type: types.ADMIN_DASHBOARD_CLOSE_MODAL,
      };
      expect(
        actions.closeAvatarModal()
      ).toEqual(expected);
    });
    it('should have a type of ADMIN_DASHBOARD_OPEN_MODAL', () => {
      const user = { foo: 'bar' };
      const expected = {
        type: types.ADMIN_DASHBOARD_OPEN_MODAL,
        user,
      };
      expect(
        actions.openAvatarModal(user)
      ).toEqual(expected);
    });
  });
});
