import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isEditing: false,
  bioInput: null,
  error: null,
  isLoading: false,
  avatarInput: null,
  emailInput: null,
  employerInput: null,
  publicInput: false,
};

const userProfileReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.PROFILE_TOGGLE_PUBLIC:
        return update(state, {
          publicInput: {
            $set: !state.publicInput,
          },
        });
      case types.PROFILE_EDIT_AVATAR:
        return update(state, {
          avatarInput: {
            $set: action.avatar,
          },
        });
      case types.PROFILE_EDIT_BIO:
        return update(state, {
          bioInput: {
            $set: action.bio,
          },
        });
      case types.PROFILE_EDIT_EMAIL:
        return update(state, {
          emailInput: {
            $set: action.email,
          },
        });
      case types.PROFILE_EDIT_EMPLOYER:
        return update(state, {
          employerInput: {
            $set: action.employer,
          },
        });
      case types.PROFILE_SUBMISSION_INITIATION:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.PROFILE_SUBMISSION_SUCCESS:
        return update(state, {
          isEditing: {
            $set: false,
          },
          bioInput: {
            $set: null,
          },
          employerInput: {
            $set: null,
          },
          emailInput: {
            $set: null,
          },
          avatarInput: {
            $set: null,
          },
          isLoading: {
            $set: false,
          },
        });
      case types.PROFILE_SUBMISSION_FAILURE:
        return update(state, {
          isEditing: {
            $set: false,
          },
          bioInput: {
            $set: null,
          },
          avatarInput: {
            $set: null,
          },
          employerInput: {
            $set: null,
          },
          emailInput: {
            $set: null,
          },
          isLoading: {
            $set: false,
          },
          error: {
            $set: action.error,
          },
        });
      case types.PROFILE_CLEAR_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      case types.PROFILE_CANCEL_EDITING:
        return update(state, {
          isEditing: {
            $set: false,
          },
          bioInput: {
            $set: null,
          },
          avatarInput: {
            $set: null,
          },
          employerInput: {
            $set: null,
          },
          emailInput: {
            $set: null,
          },
          publicInput: {
            $set: !state.publicInput,
          },
        });
      case types.PROFILE_START_EDITING:
        return update(state, {
          isEditing: {
            $set: true,
          },
        });
      case types.PROFILE_SET_DEFAULT_INPUTS:
        return update(state, {
          bioInput: {
            $set: action.inputs.bio,
          },
          avatarInput: {
            $set: action.inputs.avatar,
          },
          employerInput: {
            $set: action.inputs.employer,
          },
          emailInput: {
            $set: action.inputs.email,
          },
          publicInput: {
            $set: action.inputs.public,
          },
        });
      default:
        return state;
    }
  };

export default userProfileReducer;
