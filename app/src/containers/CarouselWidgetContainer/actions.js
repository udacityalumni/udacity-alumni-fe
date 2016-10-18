import * as types from './constants';

export const carouselAddImage = (image) => ({
  type: types.CAROUSEL_ADD_IMAGE,
  image,
});

export const carouselRemoveImage = (index) => ({
  type: types.CAROUSEL_REMOVE_IMAGE,
  index,
});

export const carouselEditImage = (index, image) => ({
  type: types.CAROUSEL_EDIT_IMAGE,
  index,
  image,
});

export const carouselSetEditing = (index) => ({
  type: types.CAROUSEL_SET_EDITING,
  index,
});

export const carouselCancelEditing = (index) => ({
  type: types.CAROUSEL_CANCEL_EDITING,
  index,
});
