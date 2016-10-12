import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { MentorshipContainer } from 'containers';
import { AppFooter } from 'components';

const MentorshipPage = () => (
  <div className={styles.container}>
    <MentorshipContainer />
    <AppFooter />
  </div>
);

export default cssModules(MentorshipPage, styles);
