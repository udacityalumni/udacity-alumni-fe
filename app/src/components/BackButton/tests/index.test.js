import BackButton from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<BackButton />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <BackButton />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
