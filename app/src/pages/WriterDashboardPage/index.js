import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { WriterDashboardContainer } from 'containers';

const WriterDashboardPage = () => (
  <div className={styles.container}>
    <WriterDashboardContainer />
  </div>
);

export default cssModules(WriterDashboardPage, styles);
