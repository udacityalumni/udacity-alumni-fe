import SingleArticleContent from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<SingleArticleContent />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <SingleArticleContent />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
