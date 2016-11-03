import Pagination from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<Pagination />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <Pagination />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
