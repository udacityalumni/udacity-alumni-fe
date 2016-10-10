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
        title: 'We could not think of enough banana bread recipes...',
        body: 'Learn to make an app that shuffles ingredients endlessly!',
        link: 'https://www.udacity.com/course/ios-developer-nanodegree--nd003',
        description: 'iOS Developer Nanodegree',
      },
      {
        title: 'We did not manage to reticulate all splines...',
        body: 'Learn to reticulate inputs to make a car spin its splines autonomously!',
        link: 'https://www.udacity.com/drive',
        description: 'Self-Driving Car Nanodegree',
      },
      {
        title: 'The instructors are not quite camera-ready...',
        body: 'Learn to make them look good anyways!',
        link: 'https://www.udacity.com/course/senior-web-developer-nanodegree-by-google--nd802',
        description: 'Senior Web-Developer Nanodegree',
      },
      {
        title: 'None of the classrooms are currently prepared...',
        body: 'Learn to create a virtual classroom that is always ready (and needs no brooming)!',
        link: 'https://www.udacity.com/course/vr-developer-nanodegree--nd017',
        description: 'Virtual-Reality Nanodegree',
      },
      {
        title: 'This corner of the App did not get attention yet...',
        body: 'Bring it into existence (and learn a lot on the way)!',
        link: 'https://github.com/udacityalumni/',
        description: 'Contribute to the Alumni-Web-App',
      },
      {
        title: 'Your code here...',
        body: 'If it is empty and you want it, come and make it!',
        link: 'https://github.com/udacityalumni/',
        description: 'Contribute to the Alumni-Web-App',
      },
      {
        title: 'Fill this space with your work...',
        body: 'Become a part of the Developer-Team!',
        link: 'https://github.com/udacityalumni/',
        description: 'Contribute to the Alumni-Web-App',
      },
    ];

    // choosing a random entry for the 404 page from content
    const randomArticle = getRandomInt(0, content.length);

    return (
      <Section align="center">
        <Header justify="center" direction="column">
          <Heading tag="h3">
            Hello curious adventurer! : )
          </Heading>
          <Paragraph>
            You've come to uncharted territory. 404-Land. Right were you belong! Ready to map?
          </Paragraph>
        </Header>
        <hr />
        <Heading tag="h1" className="legacy-message">
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
