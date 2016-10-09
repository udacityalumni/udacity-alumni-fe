import SignupForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SignupForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SignupForm />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
