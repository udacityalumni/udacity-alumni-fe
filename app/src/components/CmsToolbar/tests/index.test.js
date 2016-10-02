import CmsToolbar from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<CmsToolbar />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CmsToolbar
        spotlighted={false}
        onToggleSpotlight={e => e}
        onSetStatus={e => e}
        status={0}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
