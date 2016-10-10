import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
// importing the gromment components used in this page
import Section from 'grommet-udacity/components/Section';
// import Box from 'grommet-udacity/components/Box';
import Header from 'grommet-udacity/components/Header';
import Heading from 'grommet-udacity/components/Heading';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Anchor from 'grommet-udacity/components/Anchor';

class NotFound extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    this.renderContent = this.renderContent.bind(this);
  }

  renderContent() {
    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // a list of content entries that can be loop over randomly
    const content = [
      {
        title: 'Could not think of any banana bread recipes...',
        body: 'Learn to make an app that guides you through the baking-process!',
        link: 'https://www.udacity.com/course/ios-developer-nanodegree--nd003',
        description: 'iOS Developer Nanodegree',
      },
      {
        title: 'Failed to reticulate splines...',
        body: 'Learn to reticulate inputs to make a car drive itself (no splines attached)!',
        link: 'https://www.udacity.com/drive',
        description: 'Self-Driving Car Nanodegree',
      },
      {
        title: 'Instructors are not camera-ready...',
        body: 'Learn to make them look good anyways!',
        link: 'https://www.udacity.com/course/senior-web-developer-nanodegree-by-google--nd802',
        description: 'Senior Web-Developer Nanodegree',
      },
      {
        title: 'The classrooms are not prepared...',
        body: 'Learn to create a virtual classroom that does not collect any dust!',
        link: 'https://www.udacity.com/course/vr-developer-nanodegree--nd017',
        description: 'Virtual-Reality Nanodegree',
      },
    ];

    // choosing a random entry for the 404 page from content
    const randomArticle = getRandomInt(0, content.length);

    return (
      <Section>
        <Header>
          <Heading tag="h1">
            Tried 404 times, but:
          </Heading>
        </Header>
        <Heading tag="h2" className="legacy-message">
          { content[randomArticle].title }
        </Heading>
        <Paragraph className="learn-more">
          { content[randomArticle].body }
        </Paragraph>
        <Anchor href={ content[randomArticle].link }>
          { content[randomArticle].description }
        </Anchor>
      </Section>
      );
  }

  render() {
    return (
      <div className={styles.notFound}>
        { this.renderContent() }
      </div>
    );
  }
}


const Container = cssModules(NotFound, styles);

export default Container;
