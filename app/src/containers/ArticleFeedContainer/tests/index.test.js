import ArticleFeed from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as articleFeedContainer } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<ArticleFeed />', () => {
  it('should render with default props', () => {
    const store = mockStore({ articleFeedContainer });
    const wrapper = shallow(
      <ArticleFeed store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
