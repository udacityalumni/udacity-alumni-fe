import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { ArticleArchiveContainer } from 'containers';
import { AppFooter } from 'components';

const ArchivePage = ({
  location,
}) => (
  <div className={styles.container}>
    <ArticleArchiveContainer location={location} />
    <AppFooter />
  </div>
);

export default cssModules(ArchivePage, styles);
