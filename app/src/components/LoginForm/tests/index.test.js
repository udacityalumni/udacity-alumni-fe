import LoginForm from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { fields } from './mocks';

describe('<LoginForm />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <LoginForm
        {...fields}
        onSubmit={e => e}
        invalid
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
