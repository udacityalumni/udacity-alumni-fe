import NotFound from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<NotFound />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
    	<NotFound />
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('Anchor').length).toBe(1);
    expect(wrapper.find('Paragraph').length).toBe(2);
  });
});
