import ArticleMeta from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<ArticleMeta />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ArticleMeta
        article={{
          title: 'Awesome post',
          tags: ['awesomeness'],
        }}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
