import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Columns from 'grommet-udacity/components/Columns';
import Box from 'grommet-udacity/components/Box';
import Button from 'grommet-udacity/components/Button';

const CmsToolbar = ({
  onSave,
  canSubmit,
  onPreview,
}) => (
  <Box
    align="center"
    justify="center"
    full="horizontal"
    className={styles.toolbar}
  >
    <Columns justify="center" full="horizontal">
      <Box
        direction="row"
        full="horizontal"
        justify="between"
        align="center"
        pad="medium"
        margin="small"
        className={styles.toolbarWrapper}
        colorIndex="light-2"
      >
        <Button
          className={styles.button}
          label="Submit"
          onClick={canSubmit ? onSave : null}
        />
        <Button
          className={styles.button}
          label="Preview"
          onClick={onPreview}
        />
      </Box>
    </Columns>
  </Box>
);

CmsToolbar.propTypes = {
  canSubmit: PropTypes.bool.isRequired,
  onPreview: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default cssModules(CmsToolbar, styles);
