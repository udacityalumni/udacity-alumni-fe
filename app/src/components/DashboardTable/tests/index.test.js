import DashboardTable from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<DashboardTable />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <DashboardTable />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
