import NotFound from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<NotFound />', () => {
  it('should render with default props', () => {
    const store = mockStore(initialState);
    const wrapper = shallow(
      <NotFound store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
