import { shallow } from 'enzyme';
import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import LogoImage from '../index';

describe('<Header />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <LogoImage />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
