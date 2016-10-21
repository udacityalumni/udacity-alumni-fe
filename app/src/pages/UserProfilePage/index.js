import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';


// Pages map directly to Routes, i.e. one page equals on Route

const UserProfilePage = (props) => (
  <div className={styles.container}>
    Hello from UserProfilePage !
  </div>
);

export default cssModules(UserProfilePage, styles);
