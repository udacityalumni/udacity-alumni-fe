import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { SignupContainer } from 'containers';
import { AppFooter } from 'components';

const SignupPage = () => (
  <div className={styles.container}>
    <SignupContainer />
    <AppFooter />
  </div>
);

export default cssModules(SignupPage, styles);
