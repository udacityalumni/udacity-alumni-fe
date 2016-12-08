import * as types from './constants';
import 'whatwg-fetch';
import { BASE_URL } from 'config';
const articlesUrl = `${BASE_URL}api/v1/articles`;
const spotlightedImagesUrl = `${BASE_URL}api/v1/spotlight_images`;

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
export const loadFeaturedArticlesFailure = (error) => ({
  type: types.FEATURE_ARTICLES_FAILURE,
  error,
});

// clearLandingErrors :: None -> {Action}
export const clearLandingError = () => ({
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
      )
      .then(articles => {
        dispatch(
          loadFeaturedArticlesSuccess(articles)
        );
      }).catch(error =>
        dispatch(
          loadFeaturedArticlesFailure(error)
        )
      );
  };


export const loadSpotlightedImagesInitiation = () => ({
  type: types.SPOTLIGHTED_IMAGES_INITIATION,
});

export const loadSpotlightedImagesSuccess = (images) => ({
  type: types.SPOTLIGHTED_IMAGES_SUCCESS,
  images,
});

export const loadSpotlightedImagesFailure = (error) => ({
  type: types.SPOTLIGHTED_IMAGES_FAILURE,
  error,
});

export const loadSpotlightedImages = () =>
  (dispatch) => {
    dispatch(
      loadSpotlightedImagesInitiation()
    );
    fetch(spotlightedImagesUrl)
      .then(res => res.json())
      .then(res => res.spotlight_images)
      .then(images =>
        dispatch(
          loadSpotlightedImagesSuccess(images)
        )
      )
      .catch(error =>
        dispatch(
          loadSpotlightedImagesFailure(error)
        )
      );
  };
