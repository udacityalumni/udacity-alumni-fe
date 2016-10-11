import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { MeetupsContainer } from 'containers';

const MeetupsPage = () => (
  <div className={styles.container}>
    <MeetupsContainer />
  </div>
);

export default cssModules(MeetupsPage, styles);
