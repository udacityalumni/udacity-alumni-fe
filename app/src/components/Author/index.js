import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Article from 'grommet-udacity/components/Article';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Quote from 'grommet-udacity/components/Quote';

const defaultAvatarUrl = 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/no-user.png?raw=true';

const Author = ({
  author,
}) => (
  <Article className={styles.panel} align="center">
    <Heading tag="h2" align="center">
      About the Author
    </Heading>
    <Box align="center">
      <img src={author.avatar || defaultAvatarUrl} className={styles.avatar} />
    </Box>
    <Heading tag="h3" align="center">
      {author.name}
    </Heading>
    <Quote borderColorIndex="light-2">
      <Heading tag="h5" align="center">
        Preventive care centers of excellence misrepresentation waiting
        period EOB. Second surgical opinion network home health care
        co-insurance NAIC out-of-network.
      </Heading>
    </Quote>
  </Article>
);

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }),
};

export default cssModules(Author, styles);
