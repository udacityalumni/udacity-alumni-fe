import WriterDashboardContainer from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as writerDashboard } from '../reducer';
import { initialState as app } from '../../AppContainer/reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const articles = [{
  id: 4,
  title: 'Current procedural terminology Benefit Impaired risk',
  featured: false,
  spotlighted: false,
  content: 'Diagnostic related group HIPAA accreditation',
  feature_image: 'https://robohash.org/sapienteeaoptio.png?size=300x300',
  status: 'published',
  slug: 'current-procedural-terminology-benefit-impaired-risk',
  user: {
    id: 3,
    email: 'andreas@gmail.com',
    created_at: '2016-09-30T02:39:57.297Z',
    updated_at: '2016-10-03T18:49:42.965Z',
    name: 'Andreas Daimainger',
    avatar: 'https://avatars3.githubusercontent.com/u/13679375?v=3&s=466',
    bio: 'Hello world',
    role: 'user',
  },
  created_at: '2016-09-30T02:39:57.352Z',
  updated_at: '2016-09-30T02:39:57.352Z',
}];

const error = {message: 'error in loading, go get a drink of water for a break'};

describe('<WriterDashboard />', () => {
  it('should render with default props', () => {
    const store = mockStore({ writerDashboard, app });
    const wrapper = shallow(
      <WriterDashboardContainer
      	store={store} 
       	isLoading={false}
  		errorLoading={error}
  		articles={articles}
  	  />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
