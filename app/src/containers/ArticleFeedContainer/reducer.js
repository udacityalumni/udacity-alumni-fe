import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  current: 3,
};

const articleFeedReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.ARTICLE_FEED_INCREMENT_CURRENT:
        return update(state, {
          current: {
            $set: state.current + 3,
          },
        });
      default:
        return state;
    }
  };

export default articleFeedReducer;
