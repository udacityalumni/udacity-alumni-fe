import SignupForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SignupForm />', () => {
  it('should render with default props', () => {
    const fields = {
      nameInput: {
        touched: false,
        error: null,
      },
      emailInput: {
        touched: false,
        error: null,
      },
      passwordInput: {
        touched: false,
        error: null,
      },
      passwordConfirmationInput: {
        touched: false,
        error: null,
      },
    };
    const wrapper = shallow(
      <SignupForm {...fields} onSubmit={(e) => e} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
