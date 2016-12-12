import FeedbackTable from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<FeedbackTable />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <FeedbackTable />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
