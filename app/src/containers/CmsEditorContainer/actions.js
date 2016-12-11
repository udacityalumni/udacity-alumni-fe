import * as types from './constants';

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

export const setFeatureImage = (image) => ({
  type: types.CMS_SET_FEATURE_IMAGE,
  image,
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

export const toggleToolbarVisibility = () => ({
  type: types.CMS_TOGGLE_TOOLBAR_VISIBILITY,
});
