import React, { PropTypes } from 'react';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import Search from 'grommet-udacity/components/Search';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { LogoImage } from 'components';

const Navbar = ({
  onSearch,
  isLoggedIn,
}) => (
  <div className={styles.navbar}>
    <Header justify="between" colorIndex="light-1">
      <Title>
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
        {isLoggedIn &&
          <Anchor>
            My Classroom
          </Anchor>
        }
        <Anchor>
          Careers
        </Anchor>
        <Anchor>
          Mentorship
        </Anchor>
        <Anchor>
          Meetups
        </Anchor>
        <Search onDOMChange={onSearch} dropAlign={{ left: 'left' }} />
      </Menu>
      {isLoggedIn ?
        <Menu
          direction="row"
          align="center"
          responsive
        >
          <Anchor>
            Logout
          </Anchor>
          <Anchor>
            Account
          </Anchor>
          <Anchor>
            My Classroom
          </Anchor>
        </Menu>
      :
        <Menu
          direction="row"
          align="center"
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
  isLoggedIn: PropTypes.bool.isRequired,
};

Navbar.defaultProps = {
  isLoggedIn: false,
};

export default cssModules(Navbar, styles);
