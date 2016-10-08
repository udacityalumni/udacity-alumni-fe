import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { SingleArticleContainer } from 'containers';

// Pages map directly to Routes, i.e. one page equals on Route
const SingleArticlePage = (props) => (
  <div className={styles.container}>
    <SingleArticleContainer {...props} />
  </div>
);

export default cssModules(SingleArticlePage, styles);
