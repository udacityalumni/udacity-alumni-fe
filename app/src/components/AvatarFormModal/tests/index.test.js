import AvatarFormModal from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<AvatarFormModal />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <AvatarFormModal />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
