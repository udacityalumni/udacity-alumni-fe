import * as types from './constants';

export const setTag = (tag) => ({
  type: types.ARCHIVE_SET_TAG,
  tag,
});
