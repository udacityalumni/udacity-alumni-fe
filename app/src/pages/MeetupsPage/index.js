import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { MeetupsContainer, AppFooter } from 'containers';

const MeetupsPage = () => (
  <div className={styles.container}>
    <MeetupsContainer />
    <AppFooter />
  </div>
);

export default cssModules(MeetupsPage, styles);
