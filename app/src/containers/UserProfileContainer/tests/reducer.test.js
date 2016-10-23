import expect from 'expect';
import * as types from '../constants';
import profileReducer, { initialState } from '../reducer';

describe('profileReducer', () => {
  it('returns the initial state', () => {
    expect(
      profileReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for PROFILE_EDIT_AVATAR', () => {
    const avatarAfter = 'https://github.com/RyanCCollins/cdn/blob/master/misc/ryanc.jpg?raw=true';
    const avatarBefore = 'https://github.com/RyanCCollins/cdn/blob/master/misc/no-user.png?raw=true';
    const stateBefore = {
      avatarInput: avatarBefore,
    };
    const stateAfter = {
      avatarInput: avatarAfter,
    };
    expect(
      profileReducer(stateBefore, {
        type: types.PROFILE_EDIT_AVATAR,
        avatar: avatarAfter,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for PROFILE_EDIT_BIO', () => {
    const bioAfter = 'Focusing on immutable architecture, ' +
      'state management, component-oriented UI, progressive ' +
      'web technologies and cutting-edge functional JavaScript, ' +
      'I generate solid and reusable code with near perfect test ' +
      'coverage and style.';
    const bioBefore = '';
    const stateBefore = {
      bioInput: bioBefore,
    };
    const stateAfter = {
      bioInput: bioAfter,
    };
    expect(
      profileReducer(stateBefore, {
        type: types.PROFILE_EDIT_BIO,
        bio: bioAfter,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for PROFILE_EDIT_EMAIL', () => {
    const emailAfter = 'admin@ryancollins.io';
    const emailBefore = '';
    const stateBefore = {
      emailInput: emailBefore,
    };
    const stateAfter = {
      emailInput: emailAfter,
    };
    expect(
      profileReducer(stateBefore, {
        type: types.PROFILE_EDIT_EMAIL,
        email: emailAfter,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for PROFILE_EDIT_EMPLOYER', () => {
    const employerAfter = 'Udacity';
    const employerBefore = 'None';
    const stateBefore = {
      employerInput: employerBefore,
    };
    const stateAfter = {
      employerInput: employerAfter,
    };
    expect(
      profileReducer(stateBefore, {
        type: types.PROFILE_EDIT_EMPLOYER,
        employer: employerAfter,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for PROFILE_SUBMISSION_INITIATION', () => {
    const stateBefore = {
      isLoading: false,
    };
    const stateAfter = {
      isLoading: true,
    };
    expect(
      profileReducer(stateBefore, {
        type: types.PROFILE_SUBMISSION_INITIATION,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for PROFILE_SUBMISSION_SUCCESS', () => {
    const stateBefore = {
      isLoading: true,
      isEditing: true,
      bioInput: 'Focused and detail oriented...',
      avatarInput: 'http://avatar.com',
      employerInput: 'Udacity',
      emailInput: 'admin!@ryancollins.io',
    };
    const stateAfter = {
      isLoading: false,
      isEditing: false,
      bioInput: null,
      avatarInput: null,
      employerInput: null,
      emailInput: null,
    };
    expect(
      profileReducer(stateBefore, {
        type: types.PROFILE_SUBMISSION_SUCCESS,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for PROFILE_SUBMISSION_FAILURE', () => {
    const error = 'Error';
    const stateBefore = {
      isLoading: true,
      isEditing: true,
      bioInput: 'Focused and detail oriented...',
      avatarInput: 'http://avatar.com',
      employerInput: 'Udacity',
      emailInput: 'admin!@ryancollins.io',
      error: null,
    };
    const stateAfter = {
      isLoading: false,
      isEditing: false,
      bioInput: null,
      avatarInput: null,
      employerInput: null,
      emailInput: null,
      error,
    };
    expect(
      profileReducer(stateBefore, {
        type: types.PROFILE_SUBMISSION_FAILURE,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for PROFILE_CLEAR_ERROR', () => {
    const error = 'Error';
    const stateBefore = {
      error,
    };
    const stateAfter = {
      error: null,
    };
    expect(
      profileReducer(stateBefore, {
        type: types.PROFILE_CLEAR_ERROR,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for PROFILE_CANCEL_EDITING', () => {
    const stateBefore = {
      isEditing: true,
      bioInput: 'Hello World',
      avatarInput: 'avatar.com',
      employerInput: 'Udacity',
      emailInput: 'admin@ryancollins.io',
    };
    const stateAfter = {
      isEditing: false,
      bioInput: null,
      avatarInput: null,
      employerInput: null,
      emailInput: null,
    };
    expect(
      profileReducer(stateBefore, {
        type: types.PROFILE_CANCEL_EDITING,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for PROFILE_START_EDITING', () => {
    const stateBefore = {
      isEditing: false,
    };
    const stateAfter = {
      isEditing: true,
    };
    expect(
      profileReducer(stateBefore, {
        type: types.PROFILE_START_EDITING,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for PROFILE_SET_DEFAULT_INPUTS', () => {
    const bio = 'Woo';
    const email = 'temp@gmail.com';
    const avatar = 'http://avatar.png';
    const employer = 'Udacity';
    const inputs = {
      bio,
      email,
      avatar,
      employer,
    };
    const stateBefore = {
      bioInput: null,
      avatarInput: null,
      employerInput: null,
      emailInput: null,
    };
    const stateAfter = {
      bioInput: bio,
      avatarInput: avatar,
      employerInput: employer,
      emailInput: email,
    };
    expect(
      profileReducer(stateBefore, {
        type: types.PROFILE_SET_DEFAULT_INPUTS,
        inputs,
      })
    ).toEqual(stateAfter);
  });
});
