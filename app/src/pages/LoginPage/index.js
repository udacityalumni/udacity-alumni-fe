import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { LoginContainer } from 'containers';

const LoginPage = () => (
  <div className={styles.container}>
    <LoginContainer />
  </div>
);

export default cssModules(LoginPage, styles);
