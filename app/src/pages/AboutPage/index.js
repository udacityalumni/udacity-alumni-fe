import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AppFooter } from 'components';
import { AboutContainer } from 'containers';
import contributorVoices from './contributorVoices';

/* THINGS THAT STILL DO BE WORKED ON
==========================================================================

// TODO: implement the shuffle on the contributorVoices array
// so that the contributor Cards always pop up in a different order.

// TODO: remove console.log just below the <Sidebar> JSX

// TODO: separation of concerns. Create a container or component to better
// nest the content and the logic.

==========================================================================
*/


const AboutPage = () => (
  <div className={styles.container}>
    <AboutContainer contributorVoices={contributorVoices} />
    <AppFooter />
  </div>
);

export default cssModules(AboutPage, styles);
