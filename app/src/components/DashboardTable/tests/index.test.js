import DashboardTable from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<DashboardTable />', () => {
  it('should render with default props', () => {
    const articles = [
      {
        id: 0,
        status: 'published',
        title: 'Hello World',
        user: {
          name: 'Ryan Collins',
        },
      },
    ];
    const allArticles = articles;
    const wrapper = shallow(
      <DashboardTable articles={articles} allArticles={allArticles} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
