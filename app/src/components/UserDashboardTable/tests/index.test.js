import UserDashboardTable from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

const users = [
    {
    	"avatar": "https://avatars3.githubusercontent.com/u/13679375?v=3&s=466",
    	"created_at": "2016-09-30T02:39:57.297Z",
   		"email": "andreas@gmail.com",
    	"id": 3,
    	"name": "Andreas Daimainger",
   		"role": "user",
   		"updated_at": "2016-10-03T18:49:42.965Z"
   	},
  	{
     	"avatar": "https://avatars3",
    	"created_at": "2016-09-30T02:39:57.297Z",
   		"email": "thing_two@yahoo.com",
    	"id": 2,
    	"name": "John Doe",
   		"role": "user",
   		"updated_at": "2016-10-03T18:49:42.965Z"  		
  	}
];

const allUsers = users;

describe('<UserDashboardTable />', () => {
  it('should render with default props', () => {
  	const wrapper = shallow(
  		<UserDashboardTable users={users} allUsers={allUsers} />
  	);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
