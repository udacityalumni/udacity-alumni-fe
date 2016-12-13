import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Headline from 'grommet-udacity/components/Headline';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Article from 'grommet-udacity/components/Article';
import Footer from 'grommet-udacity/components/Footer';
import Anchor from 'grommet-udacity/components/Anchor';
import NavigateIcon from 'grommet-udacity/components/icons/base/Navigate';
import messageData from './messageData';
import { NotFoundImage, Divider } from 'components';
import { connect } from 'react-redux';

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
    const { isMobile } = this.props;
    return (
      <Box
        align="center"
        className={styles.mainWrapper}
      >
        <Box direction="row" pad="large">
          <Article
            align="center"
            justify="center"
            className={styles.mainContent}
          >
            <Section primary align="center" pad="medium">
              <Heading tag={isMobile ? 'h2' : 'h1'} align="center">
                Hello curious adventurer! : )
              </Heading>
              <Divider />
              <NotFoundImage />
              <Paragraph textAlign="center">
                You've wandered into uncharted territory. 404-Land.
                <br />If that is right where you belong, then get ready to map!
              </Paragraph>
            </Section>
            <Footer align="center" pad="large" direction="column">
              <Heading tag={isMobile ? 'h3' : 'h2'} align="center">
                { messageData[randomArticle].title }
              </Heading>
              <Box pad="medium" align="center">
                <Heading align="center" tag="h3">
                  { messageData[randomArticle].body }
                </Heading>
                <Anchor
                  primary
                  icon={<NavigateIcon />}
                  label={ messageData[randomArticle].description }
                  animateIcon
                  href={ messageData[randomArticle].link }
                />
              </Box>
            </Footer>
          </Article>
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

NotFound.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isMobile: state.app.isMobile,
});

const Container = cssModules(NotFound, styles);

export default connect(mapStateToProps)(Container);
