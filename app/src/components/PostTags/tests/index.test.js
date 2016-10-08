import PostTags from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<PostTags />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <PostTags />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
