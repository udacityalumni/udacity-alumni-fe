import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isLoading: false,
  carouselImages: [
    {
      src: 'http://zdnet4.cbsistatic.com/hub/i/r/2016/01/13/df0444a8-0bcd-46cc-b9d4-e5be56a36341/resize/770xauto/cd213f8602843b807ed63aef891203c7/image.jpg',
    },
    {
      src: 'http://zdnet4.cbsistatic.com/hub/i/r/2016/01/13/df0444a8-0bcd-46cc-b9d4-e5be56a36341/resize/770xauto/cd213f8602843b807ed63aef891203c7/image.jpg',
    },
    {
      src: 'http://zdnet4.cbsistatic.com/hub/i/r/2016/01/13/df0444a8-0bcd-46cc-b9d4-e5be56a36341/resize/770xauto/cd213f8602843b807ed63aef891203c7/image.jpg',
    },
  ],
  mainArticles: [
    {
      id: 0,
      image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250&h=250',
      content: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Nullam vel blandit ' +
        'ligula, in auctor risus. Fusce venenatis tristique ' +
        'lorem, molestie posuere augue placerat eu.',
    },
    {
      id: 1,
      image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250&h=250',
      content: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Nullam vel blandit ' +
        'ligula, in auctor risus. Fusce venenatis tristique ' +
        'lorem, molestie posuere augue placerat eu.',
    },
    {
      id: 2,
      image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250&h=250',
      content: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit. Nullam vel blandit ' +
        'ligula, in auctor risus. Fusce venenatis tristique ' +
        'lorem, molestie posuere augue placerat eu.',
    },
  ],
};

const landingReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.START_LANDING_LOADING:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.STOP_LANDING_LOADING:
        return update(state, {
          isLoading: {
            $set: false,
          },
        });
      default:
        return state;
    }
  };

export default landingReducer;
