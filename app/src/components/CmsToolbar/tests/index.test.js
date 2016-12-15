import CmsToolbar from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<CmsToolbar />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CmsToolbar
        onSave={e => e}
        canSubmit={true}
        onPreview={e => e}    
        isEditing={true}
        onToggleVisibility={e => e}  
        isVisible={true}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
