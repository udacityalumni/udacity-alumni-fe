import * as types from './constants';

export const appToggleNav = () => ({
  type: types.APP_ON_TOGGLE_NAV,
});

export const appSetMobile = (isMobile) => ({
  type: types.APP_SET_MOBILE,
  isMobile,
});

export const setSearchTerm = (term) => ({
  type: types.SET_SEARCH_TERM,
  term,
});

export const clearSearchTerm = () => ({
  type: types.CLEAR_SEARCH_TERM,
});

export const setAuthUser = (user) => ({
  type: types.SET_AUTH_USER,
  user,
});
