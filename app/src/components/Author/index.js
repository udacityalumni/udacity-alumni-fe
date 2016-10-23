import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Article from 'grommet-udacity/components/Article';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Quote from 'grommet-udacity/components/Quote';
import { Avatar } from 'components';

const noBioText = 'This user has not written a bio yet.';

const Author = ({
  author,
}) => (
  <Article className={styles.panel} align="center">
    <Heading tag="h2" align="center">
      About the Author
    </Heading>
    <Box align="center">
      <Avatar src={author.avatar} />
    </Box>
    <Heading tag="h3" align="center">
      {author.name}
    </Heading>
    <Quote borderColorIndex="light-2">
      <Heading tag="h4" align="center">
        {author.bio || noBioText}
      </Heading>
    </Quote>
  </Article>
);

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    bio: PropTypes.string.isRequired,
  }),
};

export default cssModules(Author, styles);
