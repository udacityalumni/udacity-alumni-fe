import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Layer from 'grommet-udacity/components/Layer';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Markdown from 'grommet-udacity/components/Markdown';

const CmsEditorPreview = ({
  title,
  content,
  isShowing,
  onClose,
}) => (
  <Layer
    onClose={onClose}
    closer
    align="center"
    hidden={!isShowing}
    className={styles.cmsEditorPreview}
  >
    <Box
      size="large"
      pad="large"
    >
      <Heading align="center">
        {title ? title : 'No Title Set'}
      </Heading>
      {content ?
        <Markdown content={content} />
      :
        <Heading align="center" tag="h5">
          No Content
        </Heading>
      }
    </Box>
  </Layer>
);

CmsEditorPreview.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isShowing: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default cssModules(CmsEditorPreview, styles);
