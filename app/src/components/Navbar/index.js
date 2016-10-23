import React, { PropTypes } from 'react';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import Search from 'grommet-udacity/components/Search';
import Button from 'grommet-udacity/components/Button';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { LogoImage, SessionMenu } from 'components';

const Navbar = ({
  onSearch,
  user,
  pathname,
}) => (
  <div className={styles.navbar}>
    <Header justify="between" colorIndex="light-1">
      <Title className={styles.titleImage}>
        <Anchor href="/">
          <LogoImage />
        </Anchor>
      </Title>
      <Menu
        direction="row"
        align="center"
        responsive
        className={styles.leftMenu}
      >
        {user &&
          <Button
            href="https://classroom.udacity.com/me"
            label="My Classroom"
            className={styles.myClassroomButton}
            primary
          />
        }
        <Anchor
          href="/careers"
          className={pathname === '/careers' ? 'active desktop__nav' : ''}
        >
          Careers
        </Anchor>
        <Anchor
          className={pathname === '/mentorship' ? 'active desktop__nav' : ''}
          href="/mentorship"
        >
          Mentorship
        </Anchor>
        <Anchor
          className={pathname === '/meetups' ? 'active desktop__nav' : ''}
          href="/meetups"
        >
          Meetups
        </Anchor>
        <Search
          onDOMChange={onSearch}
          dropAlign={{ left: 'left' }}
          placeHolder="Start typing..."
        />
      </Menu>
      <SessionMenu user={user} />
    </Header>
  </div>
);

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default cssModules(Navbar, styles);
