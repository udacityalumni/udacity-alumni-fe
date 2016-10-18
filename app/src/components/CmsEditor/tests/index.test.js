import CmsEditor from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<CmsEditor />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CmsEditor
        onSubmit={e => e}
        editorState={{}}
        editorTitle="Hello World"
        isValid
        onChangeTitle={e => e}
        onChangeContent={e => e}
        onTapToPreview={e => e}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
