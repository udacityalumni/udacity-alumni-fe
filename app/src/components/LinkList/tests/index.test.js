import LinkList from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<LinkList />', () => {
  it('should render with default props', () => {
  	const links = ['react', 'graphql', 'ruby'];
  	const separator = ',';
    const wrapper = shallow(
      <LinkList links={links} separator={separator} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
