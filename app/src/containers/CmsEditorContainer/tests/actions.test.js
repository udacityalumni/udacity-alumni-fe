import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('CmsEditor actions', () => {
  it('has a type of SUBMIT_ARTICLE_INITIATION', () => {
    const expected = {
      type: types.SUBMIT_ARTICLE_INITIATION,
    };
    expect(actions.submitArticleInitiation()).toEqual(expected);
  });
  it('has a type of SUBMIT_ARTICLE_FAILURE', () => {
    const error = new Error('Failure 😳');
    const expected = {
      type: types.SUBMIT_ARTICLE_FAILURE,
      error,
    };
    expect(actions.submitArticleFailure(error)).toEqual(expected);
  });
  it('has a type of SUBMIT_ARTICLE_SUCCESS', () => {
    const message = 'Awesome, it worked! 🎉';
    const expected = {
      type: types.SUBMIT_ARTICLE_SUCCESS,
      message,
    };
    expect(actions.submitArticleSucces(message)).toEqual(expected);
  });
  it('has a type of CLEAR_CMS_MESSAGE', () => {
    const expected = {
      type: types.CLEAR_CMS_MESSAGE,
    };
    expect(actions.clearCmsMessage()).toEqual(expected);
  });
  it('has a type of CLEAR_CMS_ERROR', () => {
    const expected = {
      type: types.CLEAR_CMS_ERROR,
    };
    expect(actions.clearCmsError()).toEqual(expected);
  });
});
