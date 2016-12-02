import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('ResetPassword actions', () => {
	it('has a type of RESET_PASSWORD_REQUEST_INITIATION', () => {
	  const expected = {
	    type: types.RESET_PASSWORD_REQUEST_INITIATION,
	  };
	  expect(actions.resetPasswordRequestInitiation()).toEqual(expected);
	});
	it('has a type of RESET_PASSWORD_REQUEST_SUCCESS', () => {
		const message = 'password reset request succeeded!';
	  const expected = {
	    type: types.RESET_PASSWORD_REQUEST_SUCCESS,
	    message,
	  };
	  expect(actions.resetPasswordRequestSuccess(message)).toEqual(expected);
	});
	it('has a type of RESET_PASSWORD_REQUEST_FAILURE', () => {
		const error = new Error('An error has occured');
	  const expected = {
	    type: types.RESET_PASSWORD_REQUEST_FAILURE,
	    error,
	  };
	  expect(actions.resetPasswordRequestFailure(error)).toEqual(expected);
	});
	it('has a type of RESET_PASSWORD_CLEAR_ERROR', () => {
	  const expected = {
	    type: types.RESET_PASSWORD_CLEAR_ERROR,
	  };
	  expect(actions.resetPasswordClearError()).toEqual(expected);
	});
	it('has a type of RESET_PASSWORD_CLEAR_MESSAGE', () => {
	  const expected = {
	    type: types.RESET_PASSWORD_CLEAR_MESSAGE,
	  };
	  expect(actions.resetPasswordClearMessage()).toEqual(expected);
	});
});
