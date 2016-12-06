import LoadingIndicator from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';

describe('<LoadingIndicator />', () => {
  it('should render with default props', () => {
  	const isLoading = true;
  	const message = 'Do several jumping jacks while you wait...';
    const wrapper = shallow(
      <LoadingIndicator isLoading={isLoading} message={message} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
