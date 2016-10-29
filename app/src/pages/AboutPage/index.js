import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import { MartinRulz,
        AppFooter,
        MainCarousel } from 'components';
// importing the Udacity loading messages and their adapted versions

import contributorVoices from './contributorVoices';
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
    <MainCarousel
      images={[
        {
          src: 'http://oi63.tinypic.com/24vse9f.jpg',
        },
        {
          src: 'http://oi63.tinypic.com/24vse9f.jpg',
        }
      ]}
    />
    <AppFooter />
  </div>
);


export default cssModules(AboutPage, styles);
