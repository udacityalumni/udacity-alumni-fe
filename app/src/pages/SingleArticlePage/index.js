import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { SingleArticleContainer } from 'containers';

// Pages map directly to Routes, i.e. one page equals on Route
const SingleArticlePage = () => (
  <div className={styles.container}>
    <SingleArticleContainer />
  </div>
);

export default cssModules(SingleArticlePage, styles);
