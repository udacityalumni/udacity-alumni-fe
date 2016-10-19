import expect from 'expect';
import * as types from './constants';
import carouselWidgetReducer, { initialState } from '../reducer';

describe('carouselWidgetReducer', () => {
  it('returns the initial state', () => {
    expect(
      carouselWidgetReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for CAROUSEL_SET_IMAGES', () => {
    const images = [
      {
        id: 0,
        url: 'https://c2.staticflickr.com/8/7127/7552248154_978bcb1773.jpg',
      },
    ];
    const stateBefore = {
      images: null,
    };
    const stateAfter = {
      images,
    };
    expect(
      carouselWidgetReducer(stateBefore, {
        type: types.CAROUSEL_SET_IMAGES,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CAROUSEL_SET_EDITING', () => {
    const index = 0;
    const stateBefore = {
      currentlyEditing: null,
    };
    const stateAfter = {
      currentlyEditing: index,
    };
    expect(
      carouselWidgetReducer(stateBefore, {
        type: types.CAROUSEL_SET_EDITING,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CAROUSEL_CANCEL_EDITING', () => {
    const stateBefore = {
      currentlyEditing: 1,
    };
    const stateAfter = {
      currentlyEditing: null,
    };
    expect(
      carouselWidgetReducer(stateBefore, {
        type: types.CAROUSEL_CANCEL_EDITING,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CAROUSEL_ADD_IMAGE', () => {
    const images = [
      {
        id: 0,
        url: 'https://c2.staticflickr.com/8/7127/7552248154_978bcb1773.jpg',
      },
      {
        id: 1,
        url: 'https://c2.staticflickr.com/8/7127/7552248154_978bcb1775.jpg',
      },
    ];
    const image = {
      id: 1,
      url: 'https://c2.staticflickr.com/8/7127/7552248154_978bcb1775.jpg',
    };
    const stateBefore = {
      images: [image],
    };
    const stateAfter = {
      images,
    };
    expect(
      carouselWidgetReducer(stateBefore, {
        type: types.CAROUSEL_ADD_IMAGE,
        image,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CAROUSEL_REMOVE_IMAGE', () => {
    const index = 0;
    const imagesBefore = [
      {
        id: 0,
        url: 'https://c2.staticflickr.com/8/7127/7552248154_978bcb1773.jpg',
      },
      {
        id: 1,
        url: 'https://c2.staticflickr.com/8/7127/7552248154_978bcb1775.jpg',
      },
    ];
    const imagesAfter = [{
      id: 1,
      url: 'https://c2.staticflickr.com/8/7127/7552248154_978bcb1775.jpg',
    }];
    const stateBefore = {
      images: imagesBefore,
    };
    const stateAfter = {
      images: imagesAfter,
    };
    expect(
      carouselWidgetReducer(stateBefore, {
        type: types.CAROUSEL_REMOVE_IMAGE,
        index,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CAROUSEL_EDIT_IMAGE', () => {
    const index = 0;
    const image = {
      id: 0,
      url: 'https://c2.staticflickr.com/8/7127/7552248154_978bcb1775.jpg',
    };
    const imagesBefore = [
      {
        id: 0,
        url: 'https://c2.staticflickr.com/8/7127/7552248154_978bcb1773.jpg',
      },
    ];
    const imagesAfter = [
      {
        id: 0,
        url: 'https://c2.staticflickr.com/8/7127/7552248154_978bcb1775.jpg',
      },
    ];
    const stateBefore = {
      images: imagesBefore,
      currentlyEditing: 1,
    };
    const stateAfter = {
      images: imagesAfter,
      currentlyEditing: null,
    };
    expect(
      carouselWidgetReducer(stateBefore, {
        type: types.CAROUSEL_EDIT_IMAGE,
        index,
        image,
      })
    ).toEqual(stateAfter);
  });
});
