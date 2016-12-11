import * as types from './constants';

export const initialState = {
  isAddingFeedback: false,
};

const feedbackReducer =
(state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_FEEDBACK_MODAL:
      return {
        ...state,
        isAddingFeedback: !state.isAddingFeedback,
      };
    default:
      return state;
  }
};

export default feedbackReducer;
