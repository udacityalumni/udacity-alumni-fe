import DashboardTableButtonMenu from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<DashboardTableButtonMenu />', () => {
  it('should render with default props', () => {
  	const article = {
  		id: 1, 
  		status: 'published', 
  		slug: 'nickname',
  	};
  	const wrapper = shallow(
      <DashboardTableButtonMenu article={article} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
