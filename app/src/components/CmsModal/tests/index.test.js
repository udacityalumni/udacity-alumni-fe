import CmsModal from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import mockTags, { selectedTags } from './mocks';

describe('<CmsModal />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <CmsModal
        isShowing
        onClose={e => e}
        spotlighted
        onToggleSpotlight={e => e}
        onSetStatus={e => e}
        status={0}
        onSave={e => e}
        canSubmit
        tags={mockTags}
        onChangeValue={e => e}
        selectedTags={selectedTags}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
