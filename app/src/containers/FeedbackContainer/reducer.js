import * as types from './constants';

export const initialState = {
  isAddingFeedback: false,
};

const feedbackReducer =
(state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_ADD_FEEDBACK:
      return {
        ...state,
        isAddingFeedback: !state.isAddingFeedback,
      };
    default:
      return state;
  }
};

export default feedbackReducer;
