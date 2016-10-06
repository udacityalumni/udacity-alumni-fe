import MobileNav from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<MobileNav />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <MobileNav />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
