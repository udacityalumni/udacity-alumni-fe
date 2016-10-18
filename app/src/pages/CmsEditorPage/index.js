import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { CmsEditorContainer } from 'containers';

const CmsEditorPage = ({
  location,
}) => (
  <div className={styles.container}>
    <CmsEditorContainer location={location} />
  </div>
);

CmsEditorPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default cssModules(CmsEditorPage, styles);
