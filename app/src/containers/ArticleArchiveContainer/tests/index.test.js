import ArticleArchive from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as articleArchiveContainer } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<ArticleArchive />', () => {
  it('should render with default props', () => {
    const store = mockStore({ articleArchiveContainer });
    const wrapper = shallow(
      <ArticleArchive store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
