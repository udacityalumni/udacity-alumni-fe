import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AppFooter } from 'components';
import { AboutContainer } from 'containers';
// importing the content
import contributorVoices from './contributorVoices';

const AboutPage = () => (
  <div className={styles.container}>
    <AboutContainer contributorVoices={contributorVoices} />
    <AppFooter />
  </div>
);

export default cssModules(AboutPage, styles);
