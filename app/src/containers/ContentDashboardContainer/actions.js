import * as types from './constants';
import 'whatwg-fetch';
const baseUrl = 'https://udacity-alumni-api.herokuapp.com/';
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

// loadFeaturedArticles :: None -> Thunk
export const loadSearchArticles = () =>
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
