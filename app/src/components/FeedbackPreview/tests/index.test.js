import FeedbackPreview from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<FeedbackPreview />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <FeedbackPreview />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
