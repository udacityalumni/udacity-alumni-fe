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
};

const adminDashboardReducer =
  (state = initialState, action) => {
    switch (action.type) {
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
