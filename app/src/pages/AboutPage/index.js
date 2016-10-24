import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import { MartinRulz, AppFooter } from 'components';
// Change as needed.  This image is optimized
const AboutPageImage = 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/meetups.jpeg?raw=true';

const AboutPage = () => (
  <div className={styles.container}>
    <Hero
      backgroundImage={AboutPageImage}
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
