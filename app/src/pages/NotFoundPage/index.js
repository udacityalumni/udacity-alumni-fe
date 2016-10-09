import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AppFooter } from 'components';

const NotFound = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Not Found</h1>
    <AppFooter />
  </div>
);

export default cssModules(NotFound, styles);
