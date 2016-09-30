import SpotlightArticles from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SpotlightArticles />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SpotlightArticles
        articles={[
          {
            image: 'http://helloworld.com',
            content: 'Hello World',
            updated_at: '12',
            user: {
              name: 'Ryan Collins',
            },
            slug: 'hello-world',
          },
        ]}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
