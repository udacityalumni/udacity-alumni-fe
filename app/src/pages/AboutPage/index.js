import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AboutContainer } from 'containers';
import { AppFooter } from 'components';
// importing the content


/* THINGS THAT STILL DO BE WORKED ON
==========================================================================

// TODO: implement the shuffle on the contributorVoices array
// so that the contributor Cards always pop up in a different order.

// TODO: remove console.log just below the <Sidebar> JSX

// TODO: separation of concerns. Create a container or component to better
// nest the content and the logic.

==========================================================================
*/

const userData = [
  {
    label: 'Anything you want',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/White_square_with_question_mark.png',
    heading: 'Hei You!',
    githubUrl: 'https://github.com/udacityalumni',
    description: 'There surely is something you can do to make this better! : )',
  },
  {
    label: 'Coder',
    image: 'https://avatars0.githubusercontent.com/u/10746052?v=3&s=400',
    heading: 'Hei You!',
    githubUrl: 'https://github.com/udacityalumni',
    description: 'The project is about learning React and practice collaborative development with friendly fellow Udacians.',
  },
];


const AboutPage = () => (
  <div className={styles.container}>
    <AboutContainer userData={userData} />
    <AppFooter />
  </div>
);

export default cssModules(AboutPage, styles);
