import WriterDashboardContainer from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as writerDashboard } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<WriterDashboard />', () => {
  it('should render with default props', () => {
    const store = mockStore({ writerDashboard });
    const wrapper = shallow(
      <WriterDashboardContainer store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
