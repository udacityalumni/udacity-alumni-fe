import SessionMenu from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SessionMenu />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SessionMenu />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
