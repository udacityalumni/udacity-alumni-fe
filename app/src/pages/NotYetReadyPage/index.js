import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { MartinRulz } from 'components';

const NotYetReadyPage = () => (
  <div className={styles.container}>
    <MartinRulz />
  </div>
);

export default cssModules(NotYetReadyPage, styles);
