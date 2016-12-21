import ResetPassword from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as resetPassword } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<ResetPassword />', () => {
  it('should render with default props', () => {
    const store = mockStore({ resetPassword });
    const wrapper = shallow(
      <ResetPassword store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
