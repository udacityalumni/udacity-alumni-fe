import * as types from './constants';
import 'whatwg-fetch';
const baseUrl = typeof process.env.BASE_URL !== 'undefined' ?
  process.env.BASE_URL : 'https://udacity-alumni-api.herokuapp.com/';
const articlesUrl = `${baseUrl}api/v1/articles`;

// loadDashboardArticlesInitiation :: None -> {Action}
export const loadDashboardArticlesInitiation = () => ({
  type: types.DASHBOARD_ARTICLES_INITIATION,
});

// loadDashboardArticlesSuccess :: JSON -> {Action}
export const loadDashboardArticlesSuccess = (articles) => ({
  type: types.DASHBOARD_ARTICLES_SUCCESS,
  articles,
});

// loadDashboardArticlesFailure :: Err -> {Action}
export const loadDashboardArticlesFailure = (error) => ({
  type: types.DASHBOARD_ARTICLES_FAILURE,
  error,
});

// clearDashboardError :: None -> {Action}
export const clearDashboardError = () => ({
  type: types.CLEAR_DASHBOARD_ERROR,
});

// loadDashboardArticles :: None -> Thunk
export const loadDashboardArticles = () =>
  (dispatch) => {
    dispatch(
      loadDashboardArticlesInitiation()
    );
    fetch(articlesUrl)
      .then(res => res.json())
      .then(res => res.articles)
      .then(articles =>
        articles.sort((a, b) =>
          new Date(a.updated_at) - new Date(b.updated_at)
        )
      )
      .then(articles => {
        dispatch(
          loadDashboardArticlesSuccess(articles)
        );
      }).catch(error =>
        dispatch(
          loadDashboardArticlesFailure(
            error.message || 'An unknown error has occured'
          )
        )
      );
  };

export const dashboardToggleModalToDelete = (id) => ({
  type: types.DASHBOARD_TOGGLE_MODAL,
  id,
});

// dashboardSetPage :: Int -> {Action}
export const dashboardSetPage = (page) => ({
  type: types.DASHBOARD_SET_PAGE,
  page,
});

export const dashboardModalConfirmation = () => ({
  type: types.DASHBOARD_MODAL_CONFIRMATION,
});

export const dashboardModalCancelation = () => ({
  type: types.DASHBOARD_MODAL_CANCEL,
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

// clearDashboardMessage :: None -> {Action}
export const clearDashboardMessage = () => ({
  type: types.CLEAR_DASHBOARD_MESSAGE,
});

export const handleClearingToast = (type) =>
  (dispatch) => {
    switch (type) {
      case 'error':
        dispatch(clearDashboardError());
        break;
      case 'message':
        dispatch(clearDashboardMessage());
        break;
      default: break;
    }
  };
