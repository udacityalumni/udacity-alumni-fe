import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

/* eslint-enable */

// Pages map directly to Routes, i.e. one page equals on Route
// Handler that maps to a route in /utils/routes
const LandingPage = (props) => (
  <div className={styles.container}>
    {...props}
  </div>
);

export default cssModules(LandingPage, styles);
