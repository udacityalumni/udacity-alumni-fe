import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Article from 'grommet-udacity/components/Article';
import Image from 'grommet-udacity/components/Image';
import Paragraph from 'grommet-udacity/components/Paragraph';

const SingleArticle = ({
  article,
}) => (
  <div className={styles.singleArticle}>
    <Heading className={styles.heading} align="center" tag="h1">
      {article.title}
    </Heading>
    <Image src={article.feature_image} />
    <Box align="center" justify="center" size="large" pad={{ horizontal: 'small' }}>
      <Article align="center">
        <Paragraph>
          {article.content}
        </Paragraph>
      </Article>
    </Box>
  </div>
);

SingleArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default cssModules(SingleArticle, styles);
