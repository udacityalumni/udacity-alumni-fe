import expect from 'expect';
import adminDashboardReducer, { initialState } from '../reducer';
import * as types from '../constants';

describe('adminDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(
      adminDashboardReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for ADMIN_DASHBOARD_CLEAR_MESSAGE', () => {
    const stateBefore = {
      message: 'Foobar',
    };
    const stateAfter = {
      message: null,
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_CLEAR_MESSAGE,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for DASHBOARD_DELETE_ARTICLE_INITIATION', () => {
    const stateBefore = {
      isSubmitting: false,
    };
    const stateAfter = {
      isSubmitting: true,
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.DASHBOARD_DELETE_ARTICLE_INITIATION,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for DASHBOARD_DELETE_ARTICLE_SUCCESS', () => {
    const message = 'Foo';
    const stateBefore = {
      isSubmitting: true,
      message: null,
      confirmationModal: {
        isVisible: true,
        articleId: 1,
      },
    };
    const stateAfter = {
      isSubmitting: true,
      message,
      confirmationModal: {
        isVisible: false,
        articleId: null,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.DASHBOARD_DELETE_ARTICLE_SUCCESS,
        message,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for DASHBOARD_DELETE_ARTICLE_FAILURE', () => {
    const error = new Error('Oops');
    const stateBefore = {
      isSubmitting: true,
      error: null,
    };
    const stateAfter = {
      isSubmitting: false,
      error,
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.DASHBOARD_DELETE_ARTICLE_FAILURE,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_OPEN_CONFIRMATION_MODAL', () => {
    const id = 1;
    const stateBefore = {
      confirmationModal: {
        isVisible: false,
        articleId: null,
      },
    };
    const stateAfter = {
      confirmationModal: {
        isVisible: true,
        articleId: id,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_OPEN_CONFIRMATION_MODAL,
        id,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_CANCEL_ARTICLE_DELETION', () => {
    const stateBefore = {
      confirmationModal: {
        isVisible: true,
        articleId: 2,
      },
    };
    const stateAfter = {
      confirmationModal: {
        isVisible: false,
        articleId: null,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_CANCEL_ARTICLE_DELETION,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_OPEN_MODAL', () => {
    const user = { foo: 'bar' };
    const stateBefore = {
      modal: {
        isVisible: false,
        user: null,
      },
    };
    const stateAfter = {
      modal: {
        isVisible: true,
        user,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_OPEN_MODAL,
        user,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_CLOSE_MODAL', () => {
    const stateBefore = {
      modal: {
        isVisible: true,
        avatarInput: 'Foo',
        user: { foo: 'bar' },
      },
    };
    const stateAfter = {
      modal: {
        isVisible: false,
        avatarInput: null,
        user: null,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_CLOSE_MODAL,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_EDIT_AVATAR_INPUT', () => {
    const input = 'Foo';
    const stateBefore = {
      modal: {
        avatarInput: null,
      },
    };
    const stateAfter = {
      modal: {
        avatarInput: input,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_EDIT_AVATAR_INPUT,
        input,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_SET_SORT_OPTIONS', () => {
    const index = 3;
    const ascending = false;
    const stateBefore = {
      userTable: {
        sortIndex: 0,
        sortAscending: true,
      },
    };
    const stateAfter = {
      userTable: {
        sortIndex: index,
        sortAscending: ascending,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_SET_SORT_OPTIONS,
        index,
        ascending,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_SET_ERROR', () => {
    const error = new Error('Oopsies');
    const stateBefore = {
      error: null,
    };
    const stateAfter = {
      error,
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_SET_ERROR,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_CLEAR_ERROR', () => {
    const error = new Error('Oopsies');
    const stateBefore = {
      error,
    };
    const stateAfter = {
      error: null,
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_CLEAR_ERROR,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_TOGGLE_ASIDE', () => {
    const stateBefore = {
      aside: {
        isVisible: true,
      },
    };
    const stateAfter = {
      aside: {
        isVisible: false,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_TOGGLE_ASIDE,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_CLEAR_USER_EDITING', () => {
    const stateBefore = {
      users: {
        editing: { foo: 'bar' },
      },
    };
    const stateAfter = {
      users: {
        editing: null,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_CLEAR_USER_EDITING,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_SET_USER_EDITING', () => {
    const user = { foo: 'bar', id: 1 };
    const stateBefore = {
      users: {
        editing: null,
      },
    };
    const stateAfter = {
      users: {
        editing: user,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_SET_USER_EDITING,
        user,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_SET_USERS_PAGE', () => {
    const page = 2;
    const stateBefore = {
      users: {
        currentPage: 0,
      },
    };
    const stateAfter = {
      users: {
        currentPage: page,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_SET_USERS_PAGE,
        page,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_SET_ARTICLES_PAGE', () => {
    const page = 2;
    const stateBefore = {
      articles: {
        currentPage: 0,
      },
    };
    const stateAfter = {
      articles: {
        currentPage: page,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_SET_ARTICLES_PAGE,
        page,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_SET_USERS', () => {
    const users = [{ foo: 'bar', id: 1 }, { foo: 'baz', id: 2 }];
    const stateBefore = {
      users: {
        items: [],
      },
    };
    const stateAfter = {
      users: {
        items: users,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_SET_USERS,
        users,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_SET_ARTICLES', () => {
    const articles = [{ foo: 'bar', id: 1 }, { foo: 'baz', id: 2 }];
    const stateBefore = {
      articles: {
        items: [],
      },
    };
    const stateAfter = {
      articles: {
        items: articles,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_SET_ARTICLES,
        articles,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_SET_ACTIVE_TAB', () => {
    const tab = 2;
    const stateBefore = {
      activeTab: 0,
    };
    const stateAfter = {
      activeTab: tab,
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_SET_ACTIVE_TAB,
        tab,
      })
    ).toEqual(stateAfter);
  });
});
