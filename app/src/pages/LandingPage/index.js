import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { LandingContainer, ArticleFeedContainer } from 'containers';

const LandingPage = () => (
  <div className={styles.container}>
    <LandingContainer />
    <ArticleFeedContainer />
  </div>
);

export default cssModules(LandingPage, styles);
