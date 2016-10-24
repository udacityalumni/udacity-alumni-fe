import ResponsiveImage from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<ResponsiveImage />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ResponsiveImage />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
