import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet-udacity/components/Box';
import { Creatable } from 'react-select';

const TagEditor = ({
  tags,
  selectedTags,
  onChangeValue,
}) => (
  <Box className={styles.tagEditor}>
    <Creatable
      multi
      value={selectedTags}
      onChange={onChangeValue}
      options={tags.map((tag) =>
        ({
          value: tag.tag,
          label: tag.tag,
        })
      )}
    />
  </Box>
);

TagEditor.propTypes = {
  onCreateTag: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
};

export default cssModules(TagEditor, styles);
