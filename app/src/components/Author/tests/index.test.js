import Author from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<Author />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Author
        author={{ name: 'Ryan Collins', avatar: 'ryancollins.io/avarat', bio: 'Hello world' }}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
