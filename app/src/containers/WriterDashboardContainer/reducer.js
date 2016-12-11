import * as types from './constants';

export const initialState = {
  articles: {
    items: [],
    perPage: 8,
    currentPage: 1,
    sortIndex: 1,
    sortAscending: true,
  },
  aside: {
    isVisible: false,
  },
  error: null,
  modal: {
    user: null,
    avatarInput: null,
    isVisible: false,
  },
  confirmationModal: {
    isVisible: false,
    articleId: null,
  },
  isSubmitting: false,
  message: null,
};


const writerDashboardReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.WRITER_DASHBOARD_SET_ARTICLES:
        return {
          ...state,
          articles: {
            ...state.articles,
            items: action.articles,
          },
        };
      case types.WRITER_DASHBOARD_SET_ARTICLES_PAGE:
        return {
          ...state,
          articles: {
            ...state.articles,
            currentPage: action.page,
          },
        };
      case types.WRITER_DASHBOARD_TOGGLE_ASIDE:
        return {
          ...state,
          aside: {
            isVisible: !state.aside.isVisible,
          },
        };
      case types.WRITER_DASHBOARD_SET_ERROR:
        return {
          ...state,
          error: action.error,
        };
      case types.WRITER_DASHBOARD_CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
      case types.WRITER_DASHBOARD_OPEN_CONFIRMATION_MODAL:
        return {
          ...state,
          confirmationModal: {
            isVisible: true,
            articleId: action.id,
          },
        };
      case types.WRITER_DASHBOARD_DELETE_ARTICLE_INITIATION:
        return {
          ...state,
          isSubmitting: true,
        };
      case types.WRITER_DASHBOARD_DELETE_ARTICLE_SUCCESS:
        return {
          ...state,
          isSubmitting: false,
          message: action.message,
          confirmationModal: {
            isVisible: false,
            articleId: null,
          },
        };
      case types.WRITER_DASHBOARD_DELETE_ARTICLE_FAILURE:
        return {
          ...state,
          isSubmitting: false,
          error: action.error,
        };
      case types.WRITER_DASHBOARD_CLEAR_MESSAGE:
        return {
          ...state,
          message: null,
        };
      case types.WRITER_DASHBOARD_SET_SORT_OPTIONS:
        return {
          ...state,
          articles: {
            ...state.articles,
            sortIndex: action.index,
            sortAscending: action.ascending,
          },
        };
      default:
        return state;
    }
  };

export default writerDashboardReducer;
