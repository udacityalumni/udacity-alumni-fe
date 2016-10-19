import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  user: null,
  isLoading: false,
  error: null,
  navLinks: [
    {
      url: '/careers',
      text: 'Careers',
    },
    {
      url: '/mentorship',
      text: 'Mentorship',
    },
    {
      url: '/meetups',
      text: 'Meetups',
    },
  ],
  navIsActive: false,
  isMobile: false,
  searchTerm: null,
  authToken: null,
};

const appReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.SET_AUTH_TOKEN:
        return update(state, {
          authToken: {
            $set: action.token,
          },
        });
      case types.APP_SET_MOBILE:
        return update(state, {
          isMobile: {
            $set: action.isMobile,
          },
        });
      case types.APP_ON_TOGGLE_NAV:
        return update(state, {
          navIsActive: {
            $set: !state.navIsActive,
          },
        });
      case types.SET_SEARCH_TERM:
        return update(state, {
          searchTerm: {
            $set: action.term,
          },
        });
      case types.CLEAR_SEARCH_TERM:
        return update(state, {
          searchTerm: {
            $set: null,
          },
        });
      case types.SET_AUTH_USER:
        return update(state, {
          user: {
            $set: action.user,
          },
        });
      default:
        return state;
    }
  };


export default appReducer;
