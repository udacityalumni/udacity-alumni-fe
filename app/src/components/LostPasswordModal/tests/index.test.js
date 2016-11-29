import LostPasswordModal from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<LostPasswordModal />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <LostPasswordModal />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
