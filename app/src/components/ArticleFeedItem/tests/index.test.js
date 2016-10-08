import ArticleFeedItem from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<ArticleFeedItem />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ArticleFeedItem />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
