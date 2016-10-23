import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import { MartinRulz, AppFooter } from 'components';

const AboutPage = () => (
  <div className={styles.container}>
    <Hero
      backgroundImage="http://blog.flatironschool.com/wp-content/uploads/2016/07/happy_5.jpg"
    >
      <Headline strong>
        Udacity Alumni
      </Headline>
      <Heading tag="h2" strong>
        About Us
      </Heading>
    </Hero>
    <MartinRulz />
    <AppFooter />
  </div>
);

export default cssModules(AboutPage, styles);
