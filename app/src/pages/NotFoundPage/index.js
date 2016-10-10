import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AppFooter } from 'components';
import { NotFoundContainer } from 'containers';

const NotFound = () => (
  <div className={styles.container}>
    <NotFoundContainer />
    <AppFooter />
  </div>
);

export default cssModules(NotFound, styles);