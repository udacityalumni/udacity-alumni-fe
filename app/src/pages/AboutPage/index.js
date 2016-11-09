import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
// importing the gromment components used in this page
import Box from 'grommet-udacity/components/Box';
import App from 'grommet-udacity/components/App';
import Split from 'grommet-udacity/components/Split';
import Article from 'grommet-udacity/components/Article';
import Sidebar from 'grommet-udacity/components/Sidebar';
import Heading from 'grommet-udacity/components/Heading';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import { MartinRulz,
        AppFooter,
        MainCarousel } from 'components';
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
        flex="left"
        separator="true"
      >
        <Article>
            <Headline strong>
              Udacity Alumni
            </Headline>
            <Heading tag="h2" strong>
              About Us
            </Heading>
              It was that time of the year.
              The time when it’s still dark outside when she needed to get up.
              The time when temperature is holding water molecules fiercely imprisoned,
              yet still there is an ever-slight drizzle in the air that coyly wets you while walking towards the tram station.
              Halfway there, temperature would take those molecules hostage, that weren’t lucky enough to land on her
              scarcely exposed human-radiant skin areas, and turn them into an icy cover.
              Vienna was gray at its best. Some would say it’s the time when the city is at its deeply natural state of self.
              She was not. She had to walk to school.
          <MartinRulz />
        </Article>
        <Sidebar>
          <Headline strong>
            Contributors
          </Headline>
          <MainCarousel
            images={[
              {
                src: 'pizzaproject.png',
              },
              {
                src: 'hills.png',
              }
            ]}
          />
            They called him Barry in the Safeway sitting area. Even though it’s very unlikely that his name has ever been Barry before he became a regular here. It was somewhat surprising that he never actually disclosed his name, and Barry stuck to him in general consent, originating probably from the 50% off berries that he used to eat during those first few weeks of winter. Barry long stopped getting those 50% reduced berries from the Safeway fruit section and has taken a liking to the warmed-up-plastic-bagged chicken as well as the ready-made soups, both of which were reflected in a bulge to his belly that had started to resemble those of the more longterm residents of the shopping mall.
            By now he had already become part of the inventar, and the young boys who passed through the area, working for DoorDash and InstaKart, living in their cars, yet always moving on after a few weeks, they wouldn’t have been able to say that he hadn’t been here as long as old wheelchair-Wally or crazy Claire.
            Most of them never got to meet Barry more than through acknowledging each others presence in the sitting area, once in a while he pointed out a hidden power plug to one of the lost boys, and throughout the nearly 10 years that he frequented this place nearly every night (except in summer), there were only two of them who got to know him to a degree that he told them his name wasn’t actually Barry. He didn’t tell neither of them his real name, but what’s a real name when you’ve gone under a nickname for an eighth of an average first-world-person’s lifespan. No one ever came as far as considering that as the nickname it was, “Barry” would more correctly be spelled “Berry”. That single-character’s link to that man’s origin story extinguished faster than any light-of-justice in a student’s eyes right before handing that obligatory Dollar to the homeless person they’d been eager to be nice to talk to.
            Barry had a history with berries, but no one frequenting the Safeway sitting area would ever get to know about this.
            Those initial purchases were nothing but acts of a nostalgia for him, while he hadn’t yet properly grasped the reality of his new situation.
            Berries are expensive, even when they’re half-off and starting to mold.
        </Sidebar>
      </Split>
      <AppFooter />
    </App>
  </div>
);

export default cssModules(AboutPage, styles);