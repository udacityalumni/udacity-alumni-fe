import ToastMessage from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<ToastMessage />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <ToastMessage message="Thanks!" onClose={e => e} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
