import CmsEditor from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as cmsEditorContainer } from '../reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<CmsEditor />', () => {
  it('should render with default props', () => {
    const store = mockStore({ cmsEditorContainer });
    const wrapper = shallow(
      <CmsEditor store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
