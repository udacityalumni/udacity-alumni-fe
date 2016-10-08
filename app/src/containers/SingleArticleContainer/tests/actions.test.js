import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('SingleArticle actions', () => {
  it('should handle ARTICLE_INITIATION', () => {
    const articleId = 1;
    const expected = {
      type: types.ARTICLE_INITIATION,
      articleId,
    };
    expect(
      actions.loadArticleInitiation(articleId)
    ).toEqual(expected);
  });
  it('should handle ARTICLE_SUCCESS', () => {
    const article = {
      dummyProp: 'Foobar',
    };
    const expected = {
      type: types.ARTICLE_SUCCESS,
      article,
    };
    expect(
      actions.loadArticleSuccess(article)
    ).toEqual(expected);
  });
  it('should handle ARTICLE_FAILURE', () => {
    const error = 'An error has occured';
    const expected = {
      type: types.ARTICLE_FAILURE,
      error,
    };
    expect(
      actions.loadArticleFailure(error)
    ).toEqual(expected);
  });
});
