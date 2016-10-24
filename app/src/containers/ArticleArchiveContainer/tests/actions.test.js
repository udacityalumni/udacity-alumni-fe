import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('ArticleArchive actions', () => {
  it('should handle ARCHIVE_SET_TAG', () => {
    const tag = 'Hello';
    const expected = {
      type: types.ARCHIVE_SET_TAG,
      tag,
    };
    expect(
      actions.setTag(tag)
    ).toEqual(expected);
  });
});
