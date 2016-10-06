import SessionMenu from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SessionMenu />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SessionMenu
        user={{
          avatar: 'http://1onjea25cyhx3uvxgs4vu325.wpengine.netdna-cdn.com/wp-content/uploads/2016/05/image08.png',
        }}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
