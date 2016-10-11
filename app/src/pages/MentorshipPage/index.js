import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { MentorshipContainer } from 'containers';

const MentorshipPage = () => (
  <div className={styles.container}>
    <MentorshipContainer />
  </div>
);

export default cssModules(MentorshipPage, styles);
