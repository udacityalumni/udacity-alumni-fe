import PasswordResetForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<PasswordResetForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <PasswordResetForm />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
