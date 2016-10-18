import CmsModal from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<CmsModal />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CmsModal />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
