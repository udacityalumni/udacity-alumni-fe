import ToolbarToggle from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<ToolbarToggle />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ToolbarToggle />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
