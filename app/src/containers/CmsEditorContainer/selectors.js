import { createSelector } from 'reselect';

const getAction = () => (state) => state.article.action;

export const getIsEditing = createSelector(
  getAction(),
  (action) => action ? action === 'edit' : false
);
