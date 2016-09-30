import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { SignupContainer } from 'containers';

const SignupPage = () => (
  <div className={styles.container}>
    <SignupContainer />
  </div>
);

export default cssModules(SignupPage, styles);
