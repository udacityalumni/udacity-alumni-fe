import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

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

    // I'd like this one to be a list of content entries that I can loop over randomly
    const content = [
      {
        title: 'Could not find any banana bread recipes...',
        body: 'Learn to make an app that guides you through the baking-process!',
        link: 'https://www.udacity.com/course/ios-developer-nanodegree--nd003',
      },
      {
        title: 'Failed to reticulate splines...',
        body: 'Learn to reticulate a ton of inputs to make a car drive itself (no splines attached)!',
        link: 'https://www.udacity.com/drive',
      },
      {
        title: 'Instructors are not camera-ready...',
        body: 'Learn to make them look good anyways!',
        link: 'https://www.udacity.com/course/senior-web-developer-nanodegree-by-google--nd802',
      },
      {
        title: 'Sorry, we forgot to clean the classrooms...',
        body: 'Learn to create a virtual classroom that does not collect any dust!',
        link: 'https://www.udacity.com/course/vr-developer-nanodegree--nd017',
      },
    ];

    const randomArticle = getRandomInt(0, content.length);

    return (
      <div>
        { /* choosing a random entry for the 404 page from content */ }
        { /* the console is unhappy with me making a var here (but also if not). */ }
        <h2 className="legacy-message">{ content[randomArticle].title }</h2>
        <p className="learn-more">{ content[randomArticle].body }</p>
      </div>
      );
  }

  render() {
    return (
      <div className={styles.notFound}>
        { /* calling the function here */ }
        { this.renderContent() }
      </div>
    );
  }
}


const Container = cssModules(NotFound, styles);

export default Container;
