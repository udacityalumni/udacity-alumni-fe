import ArticleFeedItem from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import article from './mocks';

describe('<ArticleFeedItem />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ArticleFeedItem
        article={article}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
