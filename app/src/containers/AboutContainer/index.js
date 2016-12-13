import React, { Component, PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Card from 'grommet-udacity/components/Card';
import Anchor from 'grommet-udacity/components/Anchor';
import Split from 'grommet-udacity/components/Split';
import Article from 'grommet-udacity/components/Article';
import Sidebar from 'grommet-udacity/components/Sidebar';
import Heading from 'grommet-udacity/components/Heading';
import Markdown from 'grommet-udacity/components/Markdown';
import markdown from './about.md';

const CardComponent = ({
  label,
  image,
  heading,
  githubUrl,
  description,
}) => (
  <Paragraph>
    <Card
      label={label}
      thumbnail={image}
      heading={heading}
      description={description}
      link={
        <Anchor
          href={githubUrl}
          primary
          label="GitHub profile"
        />
      }
      contentPad="small"
      textSize="small"
      headingStrong={false}
    />
  </Paragraph>
);

// Fisher-Yates shuffle (with awesome visualization!) https://bost.ocks.org/mike/shuffle/
/* eslint-disable */
function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
/* eslint-enable */

class About extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.shuffledArray = this.shuffledArray.bind(this);
  }
  shuffledArray() {
    return shuffle(this.props.contributorVoices);
  }
  render() {
    return (
      <Box pad="large" align="center">
        <Split
          fixed="false"
          priority="left"
          showOnResponsive="priority"
          flex="both"
        >
          <Article pad="large" align="center">
            {typeof markdown === 'string' &&
              <Markdown content={markdown} />
            }
          </Article>
          <Sidebar>
            <Box
              pad="large"
              align="center"
            >
              <Heading tag="h2" strong>
                Contributor Voices
              </Heading>
              {this.shuffledArray().map((user, i) =>
                <CardComponent key={i} {...user} />
              )}
            </Box>
          </Sidebar>
        </Split>
      </Box>
    );
  }
}

About.propTypes = {
  contributorVoices: PropTypes.array.isRequired,
};

export default About;
