import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isSubmitting: false,
  error: null,
  message: null,
  modal: {
    isShowing: false,
    status: 0,
    spotlighted: false,
    canSubmit: false,
    selectedTags: [],
  },
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case types.SET_SELECTED_TAGS:
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
      default:
        return state;
    }
  };

export default cmsEditorReducer;
