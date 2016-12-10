import * as types from './constants';

export const initialState = {
  activeTab: 0,
  users: {
    editing: null,
    items: [],
    perPage: 8,
    currentPage: 1,
    sortIndex: 1,
    sortAscending: true,
  },
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

const adminDashboardReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.ADMIN_DASHBOARD_CLEAR_MESSAGE:
        return {
          ...state,
          message: null,
        };
      case types.DASHBOARD_DELETE_ARTICLE_INITIATION:
        return {
          ...state,
          isSubmitting: true,
        };
      case types.DASHBOARD_DELETE_ARTICLE_SUCCESS:
        return {
          ...state,
          isSubmitting: false,
          message: action.message,
          confirmationModal: {
            isVisible: false,
            articleId: null,
          },
        };
      case types.DASHBOARD_DELETE_ARTICLE_FAILURE:
        return {
          ...state,
          isSubmitting: false,
          error: action.error,
        };
      case types.ADMIN_DASHBOARD_OPEN_CONFIRMATION_MODAL:
        return {
          ...state,
          confirmationModal: {
            isVisible: true,
            articleId: action.id,
          },
        };
      case types.ADMIN_DASHBOARD_CANCEL_ARTICLE_DELETION:
        return {
          ...state,
          confirmationModal: {
            isVisible: false,
            articleId: null,
          },
        };
      case types.ADMIN_DASHBOARD_OPEN_MODAL:
        return {
          ...state,
          modal: {
            ...state.modal,
            isVisible: true,
            user: action.user,
          },
        };
      case types.ADMIN_DASHBOARD_CLOSE_MODAL:
        return {
          ...state,
          modal: {
            ...state.modal,
            isVisible: false,
            avatarInput: null,
            user: null,
          },
        };
      case types.ADMIN_DASHBOARD_EDIT_AVATAR_INPUT:
        return {
          ...state,
          modal: {
            ...state.modal,
            avatarInput: action.input,
          },
        };
      case types.ADMIN_DASHBOARD_SET_SORT_OPTIONS:
        return {
          ...state,
          users: {
            ...state.users,
            sortIndex: action.index,
            sortAscending: action.ascending,
          },
        };
      case types.ADMIN_DASHBOARD_SET_SORT_OPTIONS_ARTICLES:
        return {
          ...state,
          articles: {
            ...state.articles,
            sortIndex: action.index,
            sortAscending: action.ascending,
          },
        };
      case types.ADMIN_DASHBOARD_SET_ERROR:
        return {
          ...state,
          error: action.error,
        };
      case types.ADMIN_DASHBOARD_CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
      case types.ADMIN_DASHBOARD_TOGGLE_ASIDE:
        return {
          ...state,
          aside: {
            isVisible: !state.aside.isVisible,
          },
        };
      case types.ADMIN_DASHBOARD_CLEAR_USER_EDITING:
        return {
          ...state,
          users: {
            ...state.users,
            editing: null,
          },
        };
      case types.ADMIN_DASHBOARD_SET_USER_EDITING:
        return {
          ...state,
          users: {
            ...state.users,
            editing: action.index,
          },
        };
      case types.ADMIN_DASHBOARD_SET_USERS_PAGE:
        return {
          ...state,
          users: {
            ...state.users,
            currentPage: action.page,
          },
        };
      case types.ADMIN_DASHBOARD_SET_ARTICLES_PAGE:
        return {
          ...state,
          articles: {
            ...state.articles,
            currentPage: action.page,
          },
        };
      case types.ADMIN_DASHBOARD_SET_USERS:
        return {
          ...state,
          users: {
            ...state.users,
            items: action.users,
          },
        };
      case types.ADMIN_DASHBOARD_SET_ARTICLES:
        return {
          ...state,
          articles: {
            ...state.articles,
            items: action.articles,
          },
        };
      case types.ADMIN_DASHBOARD_SET_ACTIVE_TAB:
        return {
          ...state,
          activeTab: action.tab,
        };
      default:
        return state;
    }
  };

export default adminDashboardReducer;
