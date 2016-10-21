import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Button from 'grommet-udacity/components/Button';

const NotYetReadyPage = () => (
  <div className={styles.container}>
    <Box
      pad="large"
      align="center"
      justify="center"
    >
      <Heading tag="h2" align="center">Under Construction</Heading>
      <img
        className={styles.image}
        src="http://oi63.tinypic.com/24vse9f.jpg"
      />
    </Box>
    <Box
      align="center"
    >
      <Heading tag="h3">
        If you feel like helping us build this page
      </Heading>
      <Button href="mailto:admin@ryancollins.io" label="Get in Touch!" />
    </Box>
  </div>
);

export default cssModules(NotYetReadyPage, styles);
