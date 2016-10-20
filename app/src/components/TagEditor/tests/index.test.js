import TagEditor from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<TagEditor />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <TagEditor
        tags={[]}
        selectedTags={[]}
        onChangeValue={e => e}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
