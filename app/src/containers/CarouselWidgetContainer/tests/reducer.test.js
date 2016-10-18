import expect from 'expect';
import carouselWidgetReducer, { initialState } from '../reducer';

describe('carouselWidgetReducer', () => {
  it('returns the initial state', () => {
    expect(
      carouselWidgetReducer(undefined, {})
    ).toEqual(initialState);
  });
});
