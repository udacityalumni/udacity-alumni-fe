import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet-udacity/components/Box';
import { Creatable } from 'react-select';

const TagEditor = ({
  tags,
}) => (
  <Box className={styles.tagEditor}>
    <Creatable
      multi
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

};

export default cssModules(TagEditor, styles);
