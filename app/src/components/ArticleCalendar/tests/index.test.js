import ArticleCalendar from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<ArticleCalendar />', () => {
  it('should render with default props', () => {
  	const date="2016 11 15";
  	const wrapper = shallow(
      <ArticleCalendar date={date}/>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
