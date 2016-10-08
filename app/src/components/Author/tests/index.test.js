import Author from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<Author />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Author />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
