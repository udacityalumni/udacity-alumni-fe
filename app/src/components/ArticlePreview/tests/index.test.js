import ArticlePreview from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<ArticlePreview />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ArticlePreview />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
