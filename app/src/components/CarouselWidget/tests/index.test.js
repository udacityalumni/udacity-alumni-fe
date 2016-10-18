import CarouselWidget from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<CarouselWidget />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CarouselWidget />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
