import SinglePost from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SinglePost />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SinglePost />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
