import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  user: {
    avatar: 'http://1onjea25cyhx3uvxgs4vu325.wpengine.netdna-cdn.com/wp-content/uploads/2016/05/image08.png',
  },
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
};

const appReducer =
  (state = initialState, action) => {
    switch (action.type) {
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
      default:
        return state;
    }
  };


export default appReducer;
