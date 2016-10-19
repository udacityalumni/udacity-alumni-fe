import { shallow } from 'enzyme';
import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import MainCarousel from '../index';
/* eslint-disable */
describe('<Navbar />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <MainCarousel
        isLoading
        images={[
          {
            src: 'http://zdnet4.cbsistatic.com/hub/i/r/2016/01/13/df0444a8-0bcd-46cc-b9d4-e5be56a36341/resize/770xauto/cd213f8602843b807ed63aef891203c7/image.jpg',
          },
          {
            src: 'http://zdnet4.cbsistatic.com/hub/i/r/2016/01/13/df0444a8-0bcd-46cc-b9d4-e5be56a36341/resize/770xauto/cd213f8602843b807ed63aef891203c7/image.jpg',
          },
          {
            src: 'http://zdnet4.cbsistatic.com/hub/i/r/2016/01/13/df0444a8-0bcd-46cc-b9d4-e5be56a36341/resize/770xauto/cd213f8602843b807ed63aef891203c7/image.jpg',
          },
        ]}
      />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
