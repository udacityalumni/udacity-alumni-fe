import Header from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<Header />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Header
        content="Hello World"
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
