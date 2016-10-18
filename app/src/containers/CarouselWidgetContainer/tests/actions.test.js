import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('CarouselWidget actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.CAROUSELWIDGET_DEFAULT_ACTION,
      };
      expect(actions.carouselWidgetDefaultAction()).toEqual(expected);
    });
  });
});
