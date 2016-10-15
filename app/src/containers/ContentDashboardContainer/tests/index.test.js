import ContentDashboard from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as contentDashboardContainer } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<ContentDashboard />', () => {
  it('should render with default props', () => {
    const store = mockStore({ contentDashboardContainer });
    const wrapper = shallow(
      <ContentDashboard
        user={{
          name: 'David Harris',
          avatar: 'http://github.com/image.png',
        }}
        store={store}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
