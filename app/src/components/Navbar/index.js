import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import LogoImage from './logo.png';
import { IndexLink } from 'react-router';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const Navbar = () => (
  <div className={styles.navbar}>
    <Header justify="between">
      <Title>
        <img className={styles.logo} src={LogoImage} alt="logo"/>
      </Title>
      <Menu
        direction="row"
        align="center"
        responsive={false}
        style={{ marginRight: 20 }}
      >
        <IndexLink to="/" activeClassName="active">
          Home
        </IndexLink>
      </Menu>
    </Header>
  </div>
);

export default cssModules(Navbar, styles);
