import MobileNav from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import MenuIcon from 'grommet-udacity/components/icons/base/Menu';

const props = {
  user: {
    avatar: 'http://1onjea25cyhx3uvxgs4vu325.wpengine.netdna-cdn.com/wp-content/uploads/2016/05/image08.png',
  },
  navLinks: [
    {
      url: '/careers',
      text: 'Careers',
    },
    {
      url: '/mentorship',
      text: 'Mentorship',
    },
    {
      url: '/meetups',
      text: 'Meetups',
    },
  ],
  navIsActive: false,
  isMobile: false,
};

describe('<MobileNav />', () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <MobileNav
        user={props.user}
        navActive={props.navIsActive}
        onToggleNav={e => e}
        navLinks={props.navLinks}
      >
        <Header
          direction="row"
          justify="between"
          large
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          Test
        </Header>
      </MobileNav>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
