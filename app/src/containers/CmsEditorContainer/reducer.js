import * as types from './constants';
import update from 'react-addons-update';
import { editorStateFromRaw } from 'megadraft';

export const initialState = {
  article: {
    id: null,
    action: null,
  },
  editorState: editorStateFromRaw(null),
  editorTitle: null,
  preview: {
    isPreviewing: false,
    content: null,
    title: null,
  },
  isValid: false,
  isLoading: false,
  error: null,
  message: null,
  modal: {
    isShowing: false,
    status: 0,
    spotlighted: false,
    selectedTags: [],
    featureImage: null,
  },
  toolbar: {
    isVisible: true,
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

const statusEnum = (status) => {
  switch (status) {
    case 'draft':
      return 0;
    case 'published':
      return 1;
    case 'archived':
      return 2;
    default: return 0;
  }
};

const modalReducer = (state = initialState.modal, action) => {
  switch (action.type) {
    case types.SUBMIT_ARTICLE_SUCCESS:
      return update(state, {
        isShowing: {
          $set: false,
        },
      });
    case types.CMS_SET_FEATURE_IMAGE:
      return update(state, {
        featureImage: {
          $set: action.image,
        },
      });
    case types.CMS_SET_STATE_FROM_ARTICLE:
      return update(state, {
        featureImage: {
          $set: action.article.feature_image,
        },
        spotlighted: {
          $set: action.article.spotlighted,
        },
        status: {
          $set: statusEnum(action.article.status),
        },
        selectedTags: {
          $set: action.article.tags.map((tag) =>
            ({
              value: tag.tag,
              label: tag.tag,
            }),
          ),
        },
      });
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
      case types.CMS_TOGGLE_TOOLBAR_VISIBILITY:
        return update(state, {
          toolbar: {
            isVisible: {
              $set: !state.toolbar.isVisible,
            },
          },
        });
      case types.SUBMIT_ARTICLE_INITIATION:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.SUBMIT_ARTICLE_FAILURE:
        return update(state, {
          isLoading: {
            $set: false,
          },
          error: {
            $set: action.error,
          },
        });
      case types.SUBMIT_ARTICLE_SUCCESS:
        return update(state, {
          isLoading: {
            $set: false,
          },
          message: {
            $set: action.message,
          },
          modal: {
            $set: modalReducer(state.modal, action),
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
      case types.CMS_SET_ARTICLE_ID:
        return update(state, {
          article: {
            id: {
              $set: parseInt(action.id, 10),
            },
            action: {
              $set: action.action,
            },
          },
        });
      case types.CMS_SET_FEATURE_IMAGE:
        return update(state, {
          modal: modalReducer(state.modal, action),
        });
      case types.CMS_SET_STATE_FROM_ARTICLE:
        const rawContent = JSON.parse(action.article.json);
        return update(state, {
          isValid: {
            $set: true,
          },
          editorState: {
            $set: editorStateFromRaw(rawContent),
          },
          editorTitle: {
            $set: action.article.title,
          },
          modal: {
            $set: modalReducer(state.modal, action),
          },
        });
      default:
        return state;
    }
  };

export default cmsEditorReducer;
