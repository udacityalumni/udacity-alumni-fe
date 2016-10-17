import CmsEditorPreview from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<CmsEditorPreview />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CmsEditorPreview />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
