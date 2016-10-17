import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { CmsEditorContainer } from 'containers';

const CmsEditorPage = ({
  params,
}) => (
  <div className={styles.container}>
    <CmsEditorContainer params={params} />
  </div>
);

CmsEditorPage.propTypes = {
  params: PropTypes.object.isRequired,
};

export default cssModules(CmsEditorPage, styles);
