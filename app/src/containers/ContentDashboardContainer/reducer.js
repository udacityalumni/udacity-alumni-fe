import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  articles: null,
  error: null,
  message: null,
  isLoading: false,
  isShowingModal: false,
  selectedArticleId: null,
};

const contentDashboardReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.DASHBOARD_DELETE_ARTICLE_INITIATION:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.DASHBOARD_DELETE_ARTICLE_SUCCESS:
        return update(state, {
          isLoading: {
            $set: false,
          },
          message: {
            $set: action.message,
          },
          selectedArticleId: {
            $set: null,
          },
        });
      case types.DASHBOARD_DELETE_ARTICLE_FAILURE:
        return update(state, {
          isLoading: {
            $set: false,
          },
          error: {
            $set: action.error.message,
          },
          selectedArticleId: {
            $set: null,
          },
        });
      case types.DASHBOARD_TOGGLE_MODAL:
        return update(state, {
          isShowingModal: {
            $set: true,
          },
          selectedArticleId: {
            $set: action.id,
          },
        });
      case types.DASHBOARD_MODAL_CONFIRMATION:
        return update(state, {
          isShowingModal: {
            $set: false,
          },
          selectedArticleId: {
            $set: null,
          },
        });
      case types.DASHBOARD_MODAL_CANCEL:
        return update(state, {
          isShowingModal: {
            $set: false,
          },
          selectedArticleId: {
            $set: null,
          },
        });
      case types.DASHBOARD_ARTICLES_INITIATION:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.DASHBOARD_ARTICLES_SUCCESS:
        return update(state, {
          isLoading: {
            $set: false,
          },
          articles: {
            $set: action.articles,
          },
        });
      case types.DASHBOARD_ARTICLES_FAILURE:
        return update(state, {
          isLoading: {
            $set: false,
          },
          error: {
            $set: action.error,
          },
        });
      case types.CLEAR_DASHBOARD_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      case types.CLEAR_DASHBOARD_MESSAGE:
        return update(state, {
          message: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default contentDashboardReducer;
