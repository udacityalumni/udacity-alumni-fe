import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { MembersContainer } from 'containers';
import { AppFooter } from 'components';

const MembersPage = () => (
  <div className={styles.container}>
    <MembersContainer />
    <AppFooter />
  </div>
);

export default cssModules(MembersPage, styles);
