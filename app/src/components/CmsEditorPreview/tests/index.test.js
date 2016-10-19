import CmsEditorPreview from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<CmsEditorPreview />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CmsEditorPreview
        title="Foobar"
        content="Foobar@"
        isShowing
        onClose={e => e}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
