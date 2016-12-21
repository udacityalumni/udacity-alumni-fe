import AdminDashboard from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as adminDashboardContainer } from '../reducer';
import { initialState as app } from '../../AppContainer/reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<AdminDashboard />', () => {
  it('should render with default props', () => {
    const store = mockStore({ adminDashboardContainer, app });
    const wrapper = shallow(
      <AdminDashboard store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
