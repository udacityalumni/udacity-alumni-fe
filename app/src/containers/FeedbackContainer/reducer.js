import * as types from './constants';

export const initialState = {
  openFeedbackModal: false,
};

const feedbackReducer =
(state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_FEEDBACK_MODAL:
      return {
        ...state,
        openFeedbackModal: true,
      };
    default:
      return state;
  }
};

export default feedbackReducer;
