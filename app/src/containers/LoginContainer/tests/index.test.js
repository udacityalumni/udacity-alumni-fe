import Login from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as loginContainer } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<LoginContainer />', () => {
  it('should render with default props', () => {
    const store = mockStore({ loginContainer });
    const wrapper = shallow(
      <Login store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
