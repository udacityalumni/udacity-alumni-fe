import React, { PropTypes } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Search from 'grommet/components/Search';
import LogoImage from './logo.png';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const Navbar = ({
  onSearch,
}) => (
  <div className={styles.navbar}>
    <Header justify="between">
      <Title>
        <img className={styles.logo} src={LogoImage} alt="logo"/>
      </Title>
      <Menu
        direction="row"
        align="center"
        responsive
        className={styles.leftMenu}
      >
        <Anchor>
          My Classroom
        </Anchor>
        <Anchor>
          Careers
        </Anchor>
        <Anchor>
          Mentorship
        </Anchor>
        <Anchor>
          Meetups
        </Anchor>
        <Search onDOMChange={onSearch} dropAlign={{ right: 'right' }} />
      </Menu>
      <Menu
        direction="row"
        align="center"
        responsive
        style={{ marginRight: 20 }}
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
    </Header>
  </div>
);

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default cssModules(Navbar, styles);
