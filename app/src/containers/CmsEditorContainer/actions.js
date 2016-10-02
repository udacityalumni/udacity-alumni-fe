import * as types from './constants';
import 'whatwg-fetch';
const baseUrl = 'https://udacity-alumni-api.herokuapp.com/';
const articlesUrl = `${baseUrl}api/v1/articles/`;

// submitArticleInitiation :: None -> {Action}
export const submitArticleInitiation = () => ({
  type: types.SUBMIT_ARTICLE_INITIATION,
});

// submitArticleFailure :: Err -> {Action}
export const submitArticleFailure = (error) => ({
  type: types.SUBMIT_ARTICLE_FAILURE,
  error,
});

// submitArticleSucces :: JSON -> {Action}
export const submitArticleSucces = (message) => ({
  type: types.SUBMIT_ARTICLE_SUCCESS,
  message,
});

class Article {
  constructor() {
    const args = [...arguments];
    this.content = args.content;
    this.title = args.title;
    this.spotlighted = args.spotlighted || false;
    this.featured = args.featured || false;
    this.userId = args.user || 1;
    this.featuredImage = args.featuredImage || '';
    this.status = args.status || 0;
    this.toJson = this.toJson.bind(this);
  }
  toJson() {
    return {
      article: {
        content: this.content,
        title: this.title,
        spotlighted: this.spotlighted,
        featured: this.featured,
        user_id: this.userId,
        status: this.status,
        featured_image: this.featuredImage,
      },
    };
  }
}

export const submitArticleRequest = (articleProps) =>
  (dispatch) => {
    const article = new Article(articleProps);
    if (!article) { throw new Error('Unable to encode the article data.'); }
    dispatch(
      submitArticleInitiation()
    );
    fetch(articlesUrl, {
      method: 'POST',
      body: article.toJson(),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `The following error has occured: ${res.statusText}. Code ${res.status}`
        );
      }
      dispatch(
        submitArticleSucces('The article has successfully been submitted!')
      );
    })
    .catch(err => {
      const error = err ||
        new Error('An unknown error has occured.');
      dispatch(
        submitArticleFailure(error)
      );
    });
  };

// clearCmsMessage :: None -> {Action}
export const clearCmsMessage = () => ({
  type: types.CLEAR_CMS_MESSAGE,
});

// clearCmsError :: None -> {Action}
export const clearCmsError = () => ({
  type: types.CLEAR_CMS_ERROR,
});

export const handleClearingToast = (type) =>
  (dispatch) => {
    switch (type) {
      case 'error':
        dispatch(clearCmsError());
        break;
      case 'message':
        dispatch(clearCmsMessage());
        break;
      default: break;
    }
  };
