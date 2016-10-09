import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { SearchContainer } from 'containers';

const SearchPage = () => (
  <div className={styles.container}>
    <SearchContainer />
  </div>
);

export default cssModules(SearchPage, styles);
