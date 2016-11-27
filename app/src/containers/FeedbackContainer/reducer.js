import * as types from './constants';

export const initialState = {
  fbModalOpen: false,
};

const feedbackReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.OPEN_FB_MODAL:
        return {
          ... state,
          fbModalOpen: true,
        };
      default:
        return state;
    }
  };

export default feedbackReducer;
