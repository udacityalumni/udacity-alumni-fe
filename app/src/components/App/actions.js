import * as types from './constants';

export const appToggleNav = () => ({
  type: types.APP_ON_TOGGLE_NAV,
});

export const appSetMobile = (isMobile) => ({
  type: types.APP_SET_MOBILE,
  isMobile,
});
