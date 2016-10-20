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

export const loadAuthToken = (token) => ({
  type: types.SET_AUTH_TOKEN,
  token,
});

export const loadPersistedAuthToken = () => (dispatch) => {
  const token = localStorage.getItem('auth_token');
  dispatch(
    loadAuthToken(token)
  );
};

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

export const toggleOfflineMode = (offline) => ({
  type: types.TOGGLE_OFFLINE_MODE,
  offline,
});

export const appSetMessage = (message) => ({
  type: types.APP_SET_MESSAGE,
  message,
});

export const appSetError = (error) => ({
  type: types.APP_SET_ERROR,
  error,
});

export const appClearError = () => ({
  type: types.APP_CLEAR_ERROR,
});

export const appClearMessage = () => ({
  type: types.APP_CLEAR_MESSAGE,
});

const clearErrorAndMessage = (dispatch) => {
  dispatch(
    appClearError()
  );
  dispatch(
    appClearMessage()
  );
};

export const appCloseToast = (type) =>
  (dispatch) => {
    switch (type) {
      case 'error':
        dispatch(
          appClearError()
        );
        break;
      case 'message':
        dispatch(
          appClearMessage()
        );
        break;
      default:
        clearErrorAndMessage(dispatch);
        break;
    }
  };
