import AuthFormFooter from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<AuthFormFooter />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <AuthFormFooter />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
