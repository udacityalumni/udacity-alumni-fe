import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('WriterDashboard actions', () => {
  it('has a type of WRITER_DASHBOARD_SET_ARTICLES', () => {
  	const articles = [];
    const expected = {
      type: types.WRITER_DASHBOARD_SET_ARTICLES,
      articles,
    };
    expect(actions.setArticles(articles)).toEqual(expected);
  });
});
