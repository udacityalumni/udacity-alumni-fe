import ArticleMeta from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<ArticleMeta />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ArticleMeta
        article={{
          tags: ['awesomeness'],
          author: {
            name: 'Ryan Collins',
            avatar: 'https://github.com/avatar.png',
          },
        }}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
