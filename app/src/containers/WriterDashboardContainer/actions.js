import * as types from './constants';
import { push } from 'react-router-redux';

export const setArticles = (articles) => ({
  type: types.WRITER_DASHBOARD_SET_ARTICLES,
  articles,
});

export const setArticlesPage = (page) => ({
  type: types.WRITER_DASHBOARD_SET_ARTICLES_PAGE,
  page,
});

export const toggleAside = () => ({
  type: types.WRITER_DASHBOARD_TOGGLE_ASIDE,
});

export const setDashboardError = (error) => ({
  type: types.WRITER_DASHBOARD_SET_ERROR,
  error,
});

export const clearDashboardError = () => ({
  type: types.WRITER_DASHBOARD_CLEAR_ERROR,
});

export const setSortOptions = (index, ascending) => ({
  type: types.WRITER_DASHBOARD_SET_SORT_OPTIONS,
  index,
  ascending,
});

export const openConfirmationModal = (id) => ({
  type: types.WRITER_DASHBOARD_OPEN_CONFIRMATION_MODAL,
  id,
});

export const cancelDeletingArticle = () => ({
  type: types.WRITER_DASHBOARD_CANCEL_ARTICLE_DELETION,
});

export const dashboardDeleteArticleInitiation = () => ({
  type: types.WRITER_DASHBOARD_DELETE_ARTICLE_INITIATION,
});

export const dashboardDeleteArticleSuccess = (message) => ({
  type: types.WRITER_DASHBOARD_DELETE_ARTICLE_SUCCESS,
  message,
});

export const dashboardDeleteArticleFailure = (error) => ({
  type: types.WRITER_DASHBOARD_DELETE_ARTICLE_FAILURE,
  error,
});

export const clearDashboardMessage = () => ({
  type: types.WRITER_DASHBOARD_CLEAR_MESSAGE,
});

export const editArticle = (id) => (dispatch) => {
  dispatch(
    push(`/author/cms?action=edit&articleId=${id}`)
  );
};

export const viewArticle = (slug) => (dispatch) => {
  dispatch(
    push(`/articles/${slug}`)
  );
};
