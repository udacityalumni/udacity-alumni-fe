import LinkList from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<LinkList />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <LinkList />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
