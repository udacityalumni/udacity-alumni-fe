import ArticleCalendar from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<ArticleCalendar />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ArticleCalendar />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
