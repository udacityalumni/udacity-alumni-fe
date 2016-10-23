import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  tag: null,
};

const articleArchiveReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.ARCHIVE_SET_TAG:
        return update(state, {
          tag: {
            $set: action.tag,
          },
        });
      default:
        return state;
    }
  };

export default articleArchiveReducer;
