import MainAside from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<MainAside />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <MainAside
        user={{
          name: 'David Harris',
          avatar: 'http://github.com/image.png',
        }}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
