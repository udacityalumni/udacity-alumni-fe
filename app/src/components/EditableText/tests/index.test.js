import EditableText from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<EditableText />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <EditableText />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
