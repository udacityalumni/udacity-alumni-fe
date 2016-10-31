import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
// importing the gromment components used in this page
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Anchor from 'grommet-udacity/components/Anchor';
// importing the Udacity loading messages and their adapted versions
import messageData from './messageData';

class NotFound extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    this.renderContent = this.renderContent.bind(this);
  }

  renderContent() {
    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // choosing a random entry for the 404 page from messageData
    const randomArticle = getRandomInt(0, messageData.length);

    return (
      <Box
        pad="large"
        textAlign="center"
        className={styles.fillHeight}
      >
        <Box align="center">
          <Heading tag="h3">
            Hello curious adventurer! : )
          </Heading>
          <Paragraph textAlign="center">
            { /* maybe could be smaller font. better would be no linebreak in here */ }
            You've wandered into uncharted territory. 404-Land.
            <br />If that is right where you belong, then get ready to map!
          </Paragraph>
        </Box>
        <Box align="center">
          <Heading tag="h1" className="problem" alignContent="center">
            { messageData[randomArticle].title }
          </Heading>
          <Paragraph className="solution">
            { messageData[randomArticle].body }
          </Paragraph>
          <Anchor className="solution-link" href={ messageData[randomArticle].link }>
            { messageData[randomArticle].description }
          </Anchor>
        </Box>
      </Box>
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
