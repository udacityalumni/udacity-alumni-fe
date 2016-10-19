import * as types from './constants';
import 'whatwg-fetch';
const baseUrl = 'https://udacity-api.herokuapp.com/';
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
//
// class Article {
//   constructor() {
//     const args = arguments[0];
//     this.content = args.content;
//     this.json = args.json;
//     this.title = args.title;
//     this.status = args.status;
//     this.userId = args.userId || 1;
//     this.featured = false;
//     this.spotlighted = args.spotlighted;
//     this.feature_image = args.feature_image || '';
//     this.tags = args.tags;
//     this.toJson = this.toJson.bind(this);
//   }
//   toJson() {
//     const body = {
//       article: {
//         content: this.content,
//         title: this.title,
//         spotlighted: this.spotlighted,
//         featured: this.featured,
//         user_id: this.userId,
//         status: this.status,
//         json: this.json,
//         feature_image: this.feature_image,
//         tags_attributes: this.tags,
//       },
//     };
//     return JSON.stringify(body);
//   }
// }

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

export const cmsOpenModal = () => ({
  type: types.CMS_OPEN_MODAL,
});

export const cmsCloseModal = () => ({
  type: types.CMS_CLOSE_MODAL,
});

export const cmsSetStatus = (status) => ({
  type: types.CMS_SET_STATUS,
  status,
});

export const cmsSetSelectedTags = (tags) => ({
  type: types.CMS_SET_SELECTED_TAGS,
  tags,
});

export const cmsToggleSpotlight = () => ({
  type: types.CMS_TOGGLE_SPOTLIGHT,
});

export const cmsSetEditorState = (state) => ({
  type: types.CMS_SET_EDITOR_STATE,
  state,
});

export const cmsSetEditorTitle = (title) => ({
  type: types.CMS_SET_EDITOR_TITLE,
  title,
});

export const cmsSetPreviewState = ({ markdown, title }) => ({
  type: types.CMS_SET_PREVIEW_STATE,
  markdown,
  title,
});

export const cmsClosePreview = () => ({
  type: types.CMS_CLOSE_PREVIEW,
});

export const cmsSetArticleId = (id, action) => ({
  type: types.CMS_SET_ARTICLE_ID,
  id,
  action,
});

export const cmsSetStateFromArticle = (article) => ({
  type: types.CMS_SET_STATE_FROM_ARTICLE,
  article,
});
