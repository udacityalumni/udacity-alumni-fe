import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { CmsEditorContainer } from 'containers';

// Pages map directly to Routes, i.e. one page equals on Route

const CmsEditorPage = (props) => (
  <div className={styles.container}>
    <CmsEditorContainer />
  </div>
);

export default cssModules(CmsEditorPage, styles);
