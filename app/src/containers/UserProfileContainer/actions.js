import * as types from './constants';

// profileStartEditing :: None -> {Action}
export const profileStartEditing = () => ({
  type: types.PROFILE_START_EDITING,
});

// profileEditBio :: String -> {Action}
export const profileEditBio = (bio) => ({
  type: types.PROFILE_EDIT_BIO,
  bio,
});

// profileSubmissionInitiation :: None -> {Action}
export const profileSubmissionInitiation = () => ({
  type: types.PROFILE_SUBMISSION_INITIATION,
});

// profileSubmissionSuccess :: None -> {Action}
export const profileSubmissionSuccess = () => ({
  type: types.PROFILE_SUBMISSION_SUCCESS,
});

// profileSubmissionFailure :: JSON -> {Action}
export const profileSubmissionFailure = (error) => ({
  type: types.PROFILE_SUBMISSION_FAILURE,
  error,
});

// profileClearError :: None -> {Action}
export const profileClearError = () => ({
  type: types.PROFILE_CLEAR_ERROR,
});

// profileClearError :: None -> {Action}
export const profileCancelEditing = () => ({
  type: types.PROFILE_CANCEL_EDITING,
});

// profileEditAvatar :: String -> {Action}
export const profileEditAvatar = (avatar) => ({
  type: types.PROFILE_EDIT_AVATAR,
  avatar,
});

// profileEditEmail :: String -> {Action}
export const profileEditEmail = (email) => ({
  type: types.PROFILE_EDIT_EMAIL,
  email,
});

// profileEditEmployer :: String -> {Action}
export const profileEditEmployer = (employer) => ({
  type: types.PROFILE_EDIT_EMPLOYER,
  employer,
});

// setDefaultInputs :: Object -> {Action}
export const setDefaultInputs = (inputs) => ({
  type: types.PROFILE_SET_DEFAULT_INPUTS,
  inputs,
});
