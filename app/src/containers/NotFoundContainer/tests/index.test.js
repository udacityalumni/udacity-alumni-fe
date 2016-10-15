import NotFound from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<NotFound />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <NotFound />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
