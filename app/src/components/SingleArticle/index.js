import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Article from 'grommet-udacity/components/Article';
import Image from 'grommet-udacity/components/Image';
import Paragraph from 'grommet-udacity/components/Paragraph';
import { Author } from 'components';

const SingleArticle = ({
  article,
}) => (
  <div className={styles.singleArticle}>
    <Article align="center">
      <Heading className={styles.heading} align="center" tag="h2">
        {article.title}
      </Heading>
      <Image src={article.feature_image} full="horizontal" />
      <Box align="center" justify="center" size="large" pad={{ horizontal: 'small' }}>
        <Paragraph>
          {article.content}
        </Paragraph>
      </Box>
    </Article>
    <Author author={article.author} />
  </div>
);

SingleArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default cssModules(SingleArticle, styles);
