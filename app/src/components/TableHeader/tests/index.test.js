import TableHeader from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<TableHeader />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <TableHeader />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
