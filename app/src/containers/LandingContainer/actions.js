import * as types from './constants';
import 'whatwg-fetch';
const baseUrl = 'https://udacity-alumni-api.herokuapp.com/';
const articlesUrl = `${baseUrl}api/v1/articles`;

// loadFeaturedArticlesInitiation :: None -> {Action}
export const loadFeaturedArticlesInitiation = () => ({
  type: types.FEATURED_ARTICLES_INITIATION,
});

// loadFeaturedArticlesSuccess :: JSON -> {Action}
export const loadFeaturedArticlesSuccess = (articles) => ({
  type: types.FEATURED_ARTICLES_SUCCESS,
  articles,
});

// loadFeaturedArticlesFailure :: Err -> {Action}
export const loadFeaturedArticlesFailure = (errors) => ({
  type: types.FEATURE_ARTICLES_FAILURE,
  errors,
});

// clearLandingErrors :: None -> {Action}
export const clearLandingErrors = () => ({
  type: types.CLEAR_LANDING_ERRORS,
});

// loadFeaturedArticles :: None -> Thunk
export const loadFeaturedArticles = () =>
  (dispatch) => {
    dispatch(
      loadFeaturedArticlesInitiation()
    );
    fetch(articlesUrl)
      .then(res => res.json())
      .then(res => res.articles)
      .then(articles => articles.filter(article => article.status === 'published'))
      .then(articles =>
        articles.filter(article => article.spotlighted)
      )
      .then(articles =>
        articles.sort((a, b) =>
          new Date(a.updated_at) - new Date(b.updated_at)
        )
      ).then(articles => articles.slice(0, 3))
      .then(articles => {
        dispatch(
          loadFeaturedArticlesSuccess(articles)
        );
      }).catch(error =>
        dispatch(
          loadFeaturedArticlesFailure([error])
        )
      );
  };
