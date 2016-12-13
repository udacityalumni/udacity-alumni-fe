import * as types from './constants';

export const initialState = {
  isAddingFeedback: false,
  isSubmitting: false,
  message: null,
  error: null,
};

const feedbackReducer =
(state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FEEDBACK_MODAL:
      return {
        ...state,
        isAddingFeedback: !state.isAddingFeedback,
        message: null,
        error: null,
      };
    case types.FEEDBACK_SUBMISSION_INITIATION:
      return {
        ...state,
        isSubmitting: true,
      };
    case types.FEEDBACK_SUBMISSION_MESSAGE:
      return {
        ...state,
        isSubmitting: false,
        message: action.message,
      };
    case types.FEEDBACK_SUBMISSION_ERROR:
      return {
        ...state,
        message: null,
        error: action.error,
      };
    default:
      return state;
  }
};

export default feedbackReducer;
