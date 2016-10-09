import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { LoginContainer } from 'containers';
import { AppFooter } from 'components';

const LoginPage = () => (
  <div className={styles.container}>
    <LoginContainer />
    <AppFooter />
  </div>
);

export default cssModules(LoginPage, styles);
