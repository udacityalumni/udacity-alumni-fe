import * as types from './constants';

// adminDashboarddefaultAction :: Int -> {Action}
export const setActiveTab = (tab) => ({
  type: types.ADMIN_DASHBOARD_SET_ACTIVE_TAB,
  tab,
});

export const setUsers = (users) => ({
  type: types.ADMIN_DASHBOARD_SET_USERS,
  users,
});

export const setArticles = (articles) => ({
  type: types.ADMIN_DASHBOARD_SET_ARTICLES,
  articles,
});

export const setUsersPage = (page) => ({
  type: types.ADMIN_DASHBOARD_SET_USERS_PAGE,
  page,
});

export const setArticlesPage = (page) => ({
  type: types.ADMIN_DASHBOARD_SET_ARTICLES_PAGE,
  page,
});

export const setUserEditing = (index) => ({
  type: types.ADMIN_DASHBOARD_SET_USER_EDITING,
  index,
});
