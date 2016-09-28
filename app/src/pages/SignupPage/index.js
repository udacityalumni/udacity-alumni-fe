import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';


// Pages map directly to Routes, i.e. one page equals on Route

const SignupPage = (props) => (
  <div className={styles.container}>
    Hello from SignupPage !
  </div>
);

export default cssModules(SignupPage, styles);
