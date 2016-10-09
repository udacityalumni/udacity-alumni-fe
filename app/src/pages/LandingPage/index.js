import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { LandingContainer, ArticleFeedContainer } from 'containers';
import { AppFooter } from 'components';

const LandingPage = () => (
  <div className={styles.container}>
    <LandingContainer />
    <ArticleFeedContainer />
    <AppFooter />
  </div>
);

export default cssModules(LandingPage, styles);
