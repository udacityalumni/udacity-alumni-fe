import PasswordResetForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<PasswordResetForm />', () => {
  it('should render with default props', () => {
  	const passwordInput = 'secret'; 
  	const passwordConfirmationInput = 'secret';
  	const invalid = false;
    const wrapper = shallow(
      <PasswordResetForm 
      	passwordInput={passwordInput} 
      	passwordConfirmationInput={passwordConfirmationInput}
      	invalid={invalid} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
