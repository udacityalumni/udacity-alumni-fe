import CarouselWidget from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as carouselWidgetContainer } from '../reducer';
import { initialState as app } from '../../../components/App/reducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<CarouselWidgetContainer />', () => {
  it('should render with default props', () => {
    const store = mockStore({ carouselWidgetContainer, app });
    const wrapper = shallow(
      <CarouselWidget store={store} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
