import * as types from './constants';
import { push } from 'react-router-redux';

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

export const clearUserEditing = () => ({
  type: types.ADMIN_DASHBOARD_CLEAR_USER_EDITING,
});

export const toggleAside = () => ({
  type: types.ADMIN_DASHBOARD_TOGGLE_ASIDE,
});

export const setDashboardError = (error) => ({
  type: types.ADMIN_DASHBOARD_SET_ERROR,
  error,
});

export const clearDashboardError = () => ({
  type: types.ADMIN_DASHBOARD_CLEAR_ERROR,
});

export const setSortOptions = (index, ascending) => ({
  type: types.ADMIN_DASHBOARD_SET_SORT_OPTIONS,
  index,
  ascending,
});

export const openAvatarModal = (userId) => ({
  type: types.ADMIN_DASHBOARD_OPEN_MODAL,
  userId,
});

export const closeAvatarModal = () => ({
  type: types.ADMIN_DASHBOARD_CLOSE_MODAL,
});

export const editAvatarInput = (input) => ({
  type: types.ADMIN_DASHBOARD_EDIT_AVATAR_INPUT,
  input,
});

export const openConfirmationModal = (id) => ({
  type: types.ADMIN_DASHBOARD_OPEN_CONFIRMATION_MODAL,
  id,
});

export const cancelDeletingArticle = () => ({
  type: types.ADMIN_DASHBOARD_CANCEL_ARTICLE_DELETION,
});

export const editArticle = (id) => (dispatch) => {
  dispatch(
    push(`/admin/cms?action=edit&articleId=${id}`)
  );
};

export const viewArticle = (slug) => (dispatch) => {
  dispatch(
    push(`/articles/${slug}`)
  );
};
