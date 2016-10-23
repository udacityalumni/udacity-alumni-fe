import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Button from 'grommet-udacity/components/Button';
import Section from 'grommet-udacity/components/Section';

const MartinRulz = () => (
  <Section>
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
      <Button href="mailto:forbiddenvoid@gmail.com" label="Get in Touch!" />
    </Box>
  </Section>
);

export default cssModules(MartinRulz, styles);
