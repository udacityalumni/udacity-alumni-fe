import * as types from './constants';

export const toggleFeedbackModal = () => ({
  type: types.TOGGLE_FEEDBACK_MODAL,
});

export const feedbackSubmissionInitiation = () => ({
  type: types.FEEDBACK_SUBMISSION_INITIATION,
});

export const feedbackSubmissionMessage = (message) => ({
  type: types.FEEDBACK_SUBMISSION_MESSAGE,
  message,
});
