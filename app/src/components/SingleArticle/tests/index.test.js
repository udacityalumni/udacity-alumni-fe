import SingleArticle from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SingleArticle />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SingleArticle />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
