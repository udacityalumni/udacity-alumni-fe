import ConfirmationModal from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<ConfirmationModal />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ConfirmationModal />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
