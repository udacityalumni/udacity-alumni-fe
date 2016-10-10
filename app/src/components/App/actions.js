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

export const invalidateAuthUser = () => ({
  type: types.INVALIDATE_AUTH_USER,
});

export const setAuthUser = (user) => ({
  type: types.SET_AUTH_USER,
  user,
});

export const setPersistentUser = (user) => (dispatch) => {
  localStorage.setItem('user', JSON.stringify(user));
  dispatch(
    setAuthUser(user)
  );
};

export const logoutUser = () => (dispatch) => {
  localStorage.setItem('user', null);
  dispatch(
    invalidateAuthUser()
  );
};

export const loadPersistedUser = () => (dispatch) => {
  const user = localStorage.getItem('user');
  if (user) {
    const parsedUser = JSON.parse(user);
    dispatch(
      setAuthUser(parsedUser)
    );
  } else {
    dispatch(
      invalidateAuthUser()
    );
  }
};
