import FeedbackButton from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<FeedbackButton />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <FeedbackButton />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
