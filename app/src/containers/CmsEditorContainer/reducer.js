import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  article: {
    id: null,
    action: null,
  },
  editorState: null,
  editorTitle: null,
  preview: {
    isPreviewing: false,
    content: null,
    title: null,
  },
  isValid: false,
  isSubmitting: false,
  error: null,
  message: null,
  modal: {
    isShowing: false,
    status: 0,
    spotlighted: false,
    selectedTags: [],
  },
};

const previewReducer = (state = initialState.preview, action) => {
  switch (action.type) {
    case types.CMS_CLOSE_PREVIEW:
      return update(state, {
        isPreviewing: {
          $set: false,
        },
        markdown: {
          $set: null,
        },
        title: {
          $set: null,
        },
      });
    case types.CMS_SET_PREVIEW_STATE:
      return update(state, {
        isPreviewing: {
          $set: true,
        },
        content: {
          $set: action.markdown,
        },
        title: {
          $set: action.title,
        },
      });
    default: return state;
  }
};

const modalReducer = (state = initialState.modal, action) => {
  switch (action.type) {
    case types.CMS_TOGGLE_SPOTLIGHT:
      return update(state, {
        spotlighted: {
          $set: !state.spotlighted,
        },
      });
    case types.CMS_OPEN_MODAL:
      return update(state, {
        isShowing: {
          $set: true,
        },
      });
    case types.CMS_CLOSE_MODAL:
      return update(state, {
        isShowing: {
          $set: false,
        },
      });
    case types.CMS_SET_STATUS:
      return update(state, {
        status: {
          $set: action.status,
        },
      });
    case types.CMS_SET_SELECTED_TAGS:
      return update(state, {
        selectedTags: {
          $set: action.tags,
        },
      });
    default: return state;
  }
};

const cmsEditorReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.SUBMIT_ARTICLE_INITIATION:
        return update(state, {
          isSubmitting: {
            $set: true,
          },
        });
      case types.SUBMIT_ARTICLE_FAILURE:
        return update(state, {
          isSubmitting: {
            $set: false,
          },
          error: {
            $set: action.error,
          },
        });
      case types.SUBMIT_ARTICLE_SUCCESS:
        return update(state, {
          isSubmitting: {
            $set: false,
          },
          message: {
            $set: action.message,
          },
        });
      case types.CLEAR_CMS_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      case types.CLEAR_CMS_MESSAGE:
        return update(state, {
          message: {
            $set: null,
          },
        });
      case types.CMS_OPEN_MODAL:
        return update(state, {
          modal: {
            $set: modalReducer(state.modal, action),
          },
        });
      case types.CMS_CLOSE_MODAL:
        return update(state, {
          modal: {
            $set: modalReducer(state.modal, action),
          },
        });
      case types.CMS_SET_STATUS:
        return update(state, {
          modal: {
            $set: modalReducer(state.modal, action),
          },
        });
      case types.CMS_SET_SELECTED_TAGS:
        return update(state, {
          modal: {
            $set: modalReducer(state.modal, action),
          },
        });
      case types.CMS_TOGGLE_SPOTLIGHT:
        return update(state, {
          modal: {
            $set: modalReducer(state.modal, action),
          },
        });
      case types.CMS_SET_EDITOR_TITLE:
        return update(state, {
          editorTitle: {
            $set: action.title,
          },
          isValid: {
            $set: action.title !== '',
          },
        });
      case types.CMS_SET_EDITOR_STATE:
        return update(state, {
          editorState: {
            $set: action.state,
          },
        });
      case types.CMS_CLOSE_PREVIEW:
        return update(state, {
          preview: {
            $set: previewReducer(state.preview, action),
          },
        });
      case types.CMS_SET_PREVIEW_STATE:
        return update(state, {
          preview: {
            $set: previewReducer(state.preview, action),
          },
        });
      case types.CMS_SET_ARTICLE:
        return update(state, {
          article: {
            id: {
              $set: action.id,
            },
            action: {
              $set: action.action,
            },
          },
        });
      default:
        return state;
    }
  };

export default cmsEditorReducer;
