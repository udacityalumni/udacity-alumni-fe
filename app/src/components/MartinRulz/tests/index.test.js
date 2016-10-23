import MartinRulz from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<MartinRulz />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <MartinRulz />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
