import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AdminDashboardContainer } from 'containers';

const AdminDashboardPage = () => (
  <div className={styles.container}>
    <AdminDashboardContainer />
  </div>
);

export default cssModules(AdminDashboardPage, styles);
