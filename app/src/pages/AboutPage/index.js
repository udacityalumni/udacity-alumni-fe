import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
// importing the gromment components used in this page
import Box from 'grommet-udacity/components/Box';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Card from 'grommet-udacity/components/Card';
import Anchor from 'grommet-udacity/components/Anchor';
import App from 'grommet-udacity/components/App';
import Split from 'grommet-udacity/components/Split';
import Article from 'grommet-udacity/components/Article';
import Sidebar from 'grommet-udacity/components/Sidebar';
import Heading from 'grommet-udacity/components/Heading';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import { MartinRulz,
        AppFooter } from 'components';
// importing the content
import contributorVoices from './contributorVoices';
// Change as needed.  This image is optimized
const AboutPageImage = 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/meetups.jpeg?raw=true';

const AboutPage = () => (
  <div className={styles.container}>
    <App>
      <Split
        fixed="false"
        priority="left"
        showOnResponsive="priority"
        flex="both"
      >
        <Article>
            <Headline strong>
              Udacity Alumni
            </Headline>
            <Heading tag="h2" strong>
              About Us
            </Heading>
            <Paragraph>
              It was that time of the year.
              The time when it’s still dark outside when she needed to get up.
              The time when temperature is holding water molecules fiercely imprisoned,
              yet still there is an ever-slight drizzle in the air that coyly wets you while walking towards the tram station.
              Halfway there, temperature would take those molecules hostage, that weren’t lucky enough to land on her
              scarcely exposed human-radiant skin areas, and turn them into an icy cover.
              Vienna was gray at its best. Some would say it’s the time when the city is at its deeply natural state of self.
              She was not. She had to walk to school.
            </Paragraph>
          <MartinRulz />
        </Article>
        <Sidebar>
          <Box
            pad="large"
          >
            <Heading tag="h2" strong>
              Contributors' Voices
            </Heading>
            <Card label="Did some code" thumbnail="./sierra.png"
              heading="Abishek Gosh" description="..."
              link={<Anchor href="https://github.com/martin-martin" primary={true} label="Link" />} />
            <Card label="Wrote some Posts" thumbnail="./sierra.png"
              heading="SadlyFake Demo-User" description="I love blogging!"
              link={<Anchor href="https://github.com/martin-martin" primary={true} label="Link" />} />
            <Card label="Did some code" thumbnail="./sierra.png"
              heading="Martin Breuss" description="This is me. I like the webapp project because so many nice people here, yo!"
              link={<Anchor href="https://github.com/martin-martin" primary={true} label="Link" />} />
            <Card label="Manager" thumbnail="./sierra.png"
              heading="Ryan Collins" description="Don't be lazy, write your own text!"
              link={<Anchor href="https://github.com/martin-martin" primary={true} label="Link" />} />
          </Box>
        </Sidebar>
      </Split>
      <AppFooter />
    </App>
  </div>
);

// <Paragraph>
//   This is me. I like the webapp project because so many nice people here, yo!
// </Paragraph>
// <Paragraph>
//   This is you. You8 like the webapp project because so many nice people here, yo!
// </Paragraph>
// <Paragraph>
//   My name is sadly-fake Demo User. I like this project because I got into writing my blog.
// </Paragraph>
// <Paragraph>
//   This is me. I like the webapp project because so many nice people here, yo!
// </Paragraph>
// <Paragraph>
//   This is me. I like the webapp project because so many nice people here, yo!
// </Paragraph>

export default cssModules(AboutPage, styles);