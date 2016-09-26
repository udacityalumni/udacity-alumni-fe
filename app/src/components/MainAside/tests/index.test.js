import MainAside from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<MainAside />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <MainAside
        avatarImage="http://helloworld.com"
        careerResourcesParagraph="lorem ipsum"
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
