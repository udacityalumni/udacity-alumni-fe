import ContentDashboard from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as contentDashboardContainer } from '../reducer';
import { initialState as app } from '../../../components/App/reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<ContentDashboard />', () => {
  it('should render with default props', () => {
    const store = mockStore({ contentDashboardContainer, app });
    const wrapper = shallow(
      <ContentDashboard
        store={store}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
