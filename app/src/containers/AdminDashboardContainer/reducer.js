import * as types from './constants';

export const initialState = {
  activeTab: 0,
  users: {
    editing: null,
    items: [],
    perPage: 10,
    currentPage: 1,
  },
  articles: {
    items: [],
    perPage: 10,
    currentPage: 1,
  },
  aside: {
    isVisible: false,
  },
  error: null,
  userTable: {
    selectedRow: null,
    sortIndex: 0,
    sortAscending: true,
  },
};

const adminDashboardReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.ADMIN_DASHBOARD_CLEAR_SELECTED_ROW:
        return {
          ...state,
          userTable: {
            ...state.userTable,
            selectedRow: null,
          },
        };
      case types.ADMIN_DASHBOARD_SET_SELECTED_ROW:
        return {
          ...state,
          userTable: {
            ...state.userTable,
            selectedRow: action.row,
          },
        };
      case types.ADMIN_DASHBOARD_SET_SORT_OPTIONS:
        return {
          ...state,
          userTable: {
            ...state.userTable,
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
