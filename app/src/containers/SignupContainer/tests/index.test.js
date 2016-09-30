import Signup from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as signupContainer } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Signup />', () => {
  it('should render with default props', () => {
    const store = mockStore({ signupContainer });
    const wrapper = shallow(
      <Signup store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
