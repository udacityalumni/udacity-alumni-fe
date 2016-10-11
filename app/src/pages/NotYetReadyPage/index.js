import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Box from 'grommet-udacity/components/Box';


// Pages map directly to Routes, i.e. one page equals on Route

const NotYetReadyPage = (props) => (
  <div className={styles.container}>
    <Box
    	pad="large"
    	align="center"
    	justify="center">
    	<h2>Under Construction</h2>
      <img
        className={styles.image}
        src="http://oi63.tinypic.com/24vse9f.jpg"
      />
    </Box>
  </div>
);

export default cssModules(NotYetReadyPage, styles);
