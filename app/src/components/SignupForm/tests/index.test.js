import SignupForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { fields } from './mocks';

describe('<SignupForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SignupForm {...fields} isValid onSubmit={(e) => e} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
