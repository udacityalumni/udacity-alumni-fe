import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
// importing the gromment components used in this page
import Section from 'grommet-udacity/components/Section';
// import Box from 'grommet-udacity/components/Box';
import Header from 'grommet-udacity/components/Header';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Anchor from 'grommet-udacity/components/Anchor';
// importing the other components defined elsewhere
import { AppFooter } from 'components';
import { NotFoundContainer } from 'containers';

const NotFound = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Tried 404 times, but...</h1>
    <Section>
      <Header tag="h2">
        heading
      </Header>
      <Paragraph>
        Holds some text
      </Paragraph>
      <Anchor href="http://www.udacity.com">
        including a link!!
      </Anchor>
    </Section>
    <NotFoundContainer />
    <AppFooter />
  </div>
);

export default cssModules(NotFound, styles);