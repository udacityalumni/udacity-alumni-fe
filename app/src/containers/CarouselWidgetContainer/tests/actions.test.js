import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('CarouselWidget actions', () => {
  it('should handle CAROUSEL_ADD_IMAGE', () => {
    const expected = {
      type: types.CAROUSEL_ADD_IMAGE,
    };
    expect(
      actions.carouselAddImage()
    ).toEqual(expected);
  });
  it('should handle CAROUSEL_REMOVE_IMAGE', () => {
    const index = 1;
    const expected = {
      type: types.CAROUSEL_REMOVE_IMAGE,
      index,
    };
    expect(
      actions.carouselRemoveImage(index)
    ).toEqual(expected);
  });
  it('should handle CAROUSEL_EDIT_IMAGE', () => {
    const index = 1;
    const image = {
      url: 'http://helloworld.com',
    };
    const expected = {
      type: types.CAROUSEL_EDIT_IMAGE,
      image,
      index,
    };
    expect(
      actions.carouselEditImage(index, image)
    ).toEqual(expected);
  });
  it('should handle CAROUSEL_SET_EDITING', () => {
    const index = 1;
    const expected = {
      type: types.CAROUSEL_SET_EDITING,
      index,
    };
    expect(
      actions.carouselSetEditing(index)
    ).toEqual(expected);
  });
  it('should handle CAROUSEL_CANCEL_EDITING', () => {
    const index = 1;
    const expected = {
      type: types.CAROUSEL_CANCEL_EDITING,
      index,
    };
    expect(
      actions.carouselCancelEditing(index)
    ).toEqual(expected);
  });
  it('should handle CAROUSEL_SET_IMAGES', () => {
    const images = [
      {
        id: 0,
        url: 'http://google.com/helloworld.png',
      },
    ];
    const expected = {
      type: types.CAROUSEL_SET_IMAGES,
      images,
    };
    expect(
      actions.carouselSetImages(images)
    ).toEqual(expected);
  });
});
