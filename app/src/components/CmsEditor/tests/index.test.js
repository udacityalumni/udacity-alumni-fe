import CmsEditor from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<CmsEditor />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CmsEditor
        onSubmit={e => e}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
