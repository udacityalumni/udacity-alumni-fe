import TagEditor from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<TagEditor />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <TagEditor />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
