import Member from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<Member />', () => {
  it('should render with default props', () => {
  	const user = {bio:'I have done this and that.', avatar:'http://overhere'}
    const wrapper = shallow(
      <Member user={user} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
