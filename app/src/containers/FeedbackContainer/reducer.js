import * as types from './constants';

export const initialState = {
  feedbackModalOpen: false,
};

const feedbackReducer =
(state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_FEEDBACK_MODAL:
      return {
        ...state,
        feedbackModalOpen: true,
      };
    default:
      return state;
  }
};

export default feedbackReducer;
