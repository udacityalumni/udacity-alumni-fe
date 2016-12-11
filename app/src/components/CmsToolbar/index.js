import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Columns from 'grommet-udacity/components/Columns';
import Box from 'grommet-udacity/components/Box';
import Button from 'grommet-udacity/components/Button';
import ContractIcon from 'grommet-udacity/components/icons/base/Contract';

const CmsToolbar = ({
  onSave,
  canSubmit,
  onPreview,
  isEditing,
  onToggleVisibility,
  isVisible,
}) => (
  <Box
    align="center"
    justify="center"
    full="horizontal"
    className={styles.toolbar}
  >
    {isVisible &&
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
            secondary
            className={styles.button}
            label="Preview"
            onClick={onPreview}
          />
          <Button
            plain
            onClick={onToggleVisibility}
            icon={<ContractIcon />}
          />
          <Button
            primary
            className={styles.button}
            label={isEditing ? 'Update Article' : 'Save Article'}
            onClick={canSubmit ? onSave : null}
          />
        </Box>
      </Columns>
    }
  </Box>
);

CmsToolbar.propTypes = {
  canSubmit: PropTypes.bool.isRequired,
  onPreview: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onToggleVisibility: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default cssModules(CmsToolbar, styles);
