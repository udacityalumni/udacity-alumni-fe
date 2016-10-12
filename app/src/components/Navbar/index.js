import React, { PropTypes } from 'react';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import Search from 'grommet-udacity/components/Search';
import Button from 'grommet-udacity/components/Button';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { LogoImage } from 'components';

const Navbar = ({
  onSearch,
  user,
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
        <Anchor href="/careers">
          Careers
        </Anchor>
        <Anchor href="/mentorship">
          Mentorship
        </Anchor>
        <Anchor href="/meetups">
          Meetups
        </Anchor>
        <Search
          onDOMChange={onSearch}
          dropAlign={{ left: 'left' }}
          placeHolder="Start typing..."
        />
      </Menu>
      {user ?
        <Menu
          direction="row"
          align="center"
          className={styles.rightMenu}
          responsive
        >
          <Anchor href="/me/profile">
            My Profile
          </Anchor>
          <Anchor href="/logout">
            Logout
          </Anchor>
        </Menu>
      :
        <Menu
          direction="row"
          align="center"
          className={styles.rightMenu}
        >
          <Anchor href="/login">
            Log In
          </Anchor>
          <Anchor href="/signup">
            Sign Up
          </Anchor>
        </Menu>
      }
    </Header>
  </div>
);

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default cssModules(Navbar, styles);
