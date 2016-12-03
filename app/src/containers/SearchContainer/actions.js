import * as types from './constants';
import 'whatwg-fetch';
import { BASE_URL } from 'config';
const articlesUrl = `${BASE_URL}api/v1/articles`;

// loadSearchArticlesInitiation :: None -> {Action}
export const loadSearchArticlesInitiation = () => ({
  type: types.SEARCH_ARTICLES_INITIATION,
});

// loadSearchArticlesSuccess :: JSON -> {Action}
export const loadSearchArticlesSuccess = (articles) => ({
  type: types.SEARCH_ARTICLES_SUCCESS,
  articles,
});

// loadSearchArticlesFailure :: Err -> {Action}
export const loadSearchArticlesFailure = (error) => ({
  type: types.SEARCH_ARTICLES_FAILURE,
  error,
});

// clearSearchErrors :: None -> {Action}
export const clearSearchError = () => ({
  type: types.CLEAR_SEARCH_ERROR,
});

// loadFeaturedArticles :: None -> Thunk
export const loadSearchArticles = () =>
  (dispatch) => {
    dispatch(
      loadSearchArticlesInitiation()
    );
    fetch(articlesUrl)
      .then(res => res.json())
      .then(res => res.articles)
      .then(articles => articles.filter(article => article.status === 'published'))
      .then(articles =>
        articles.sort((a, b) =>
          new Date(a.updated_at) - new Date(b.updated_at)
        )
      )
      .then(articles => {
        dispatch(
          loadSearchArticlesSuccess(articles)
        );
      })
      .catch(error =>
        dispatch(
          loadSearchArticlesFailure(
            error.message || 'An unknown error has occured'
          )
        )
      );
  };
