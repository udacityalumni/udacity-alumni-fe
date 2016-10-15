import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Button from 'grommet-udacity/components/Button';


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
    <Heading tag="h3">
      If you think you can help us build it,
    </Heading>
    <Button href="mailto:admin@ryancollins.io" label="Get in Touch!" />
  </div>
);

export default cssModules(NotYetReadyPage, styles);
