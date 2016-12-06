import UserProfile from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<UserProfile />', () => {
  it('should render with default props', () => {
  	const user = {
  		avatar: 'https://here', 
  		name: 'Jane Doe', 
  		email: 'someone@yahoo.com',
  		bio: 'Have done this and that.',
  	};
    const wrapper = shallow(
      <UserProfile user={user} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
