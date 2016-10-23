import Member from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<Member />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Member />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
