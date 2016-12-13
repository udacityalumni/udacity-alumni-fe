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

export const setFeedback = (feedback) => ({
  type: types.ADMIN_DASHBOARD_SET_FEEDBACK,
  feedback,
});


export const setUsersPage = (page) => ({
  type: types.ADMIN_DASHBOARD_SET_USERS_PAGE,
  page,
});

export const setArticlesPage = (page) => ({
  type: types.ADMIN_DASHBOARD_SET_ARTICLES_PAGE,
  page,
});

export const setFeedbackPage = (page) => ({
  type: types.ADMIN_DASHBOARD_SET_FEEDBACK_PAGE,
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

export const setSortOptionsArticles = (index, ascending) => ({
  type: types.ADMIN_DASHBOARD_SET_SORT_OPTIONS_ARTICLES,
  index,
  ascending,
});

export const setSortOptionsFeedback = (index, ascending) => ({
  type: types.ADMIN_DASHBOARD_SET_SORT_OPTIONS_FEEDBACK,
  index,
  ascending,
});

export const openAvatarModal = (user) => ({
  type: types.ADMIN_DASHBOARD_OPEN_MODAL,
  user,
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

export const dashboardDeleteArticleInitiation = () => ({
  type: types.DASHBOARD_DELETE_ARTICLE_INITIATION,
});

export const dashboardDeleteArticleSuccess = (message) => ({
  type: types.DASHBOARD_DELETE_ARTICLE_SUCCESS,
  message,
});

export const dashboardDeleteArticleFailure = (error) => ({
  type: types.DASHBOARD_DELETE_ARTICLE_FAILURE,
  error,
});

export const clearDashboardMessage = () => ({
  type: types.ADMIN_DASHBOARD_CLEAR_MESSAGE,
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

export const showFeedbackModal = (item) => ({
  type: types.ADMIN_DASHBOARD_SHOW_FEEDBACK_MODAL,
  item,
});

export const dismissFeedbackModal = () => ({
  type: types.ADMIN_DASHBOARD_DISMISS_FEEDBACK_MODAL,
});
