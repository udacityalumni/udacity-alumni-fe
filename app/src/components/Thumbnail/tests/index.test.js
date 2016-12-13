import Thumbnail from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<Thumbnail />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Thumbnail />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
