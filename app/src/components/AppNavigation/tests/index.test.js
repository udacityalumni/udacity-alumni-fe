import AppNavigation from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<AppNavigation />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <AppNavigation />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
