import * as types from './constants';

// carouselAddImage :: JSON -> {Action}
export const carouselAddImage = (image) => ({
  type: types.CAROUSEL_ADD_IMAGE,
  image,
});

// carouselRemoveImage :: Int -> {Action}
export const carouselRemoveImage = (index) => ({
  type: types.CAROUSEL_REMOVE_IMAGE,
  index,
});

// carouselEditImage :: Int -> JSON -> {Action}
export const carouselEditImage = (index, image) => ({
  type: types.CAROUSEL_EDIT_IMAGE,
  index,
  image,
});

// carouselSetEditing :: Int -> {Action}
export const carouselSetEditing = (index) => ({
  type: types.CAROUSEL_SET_EDITING,
  index,
});

// carouselCancelEditing :: Int -> {Action}
export const carouselCancelEditing = (index) => ({
  type: types.CAROUSEL_CANCEL_EDITING,
  index,
});

// carouselSetImages :: Array -> {Action}
export const carouselSetImages = (images) => ({
  type: types.CAROUSEL_SET_IMAGES,
  images,
});
