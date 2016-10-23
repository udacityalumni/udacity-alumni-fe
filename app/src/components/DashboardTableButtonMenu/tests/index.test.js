import DashboardTableButtonMenu from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<DashboardTableButtonMenu />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <DashboardTableButtonMenu />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
