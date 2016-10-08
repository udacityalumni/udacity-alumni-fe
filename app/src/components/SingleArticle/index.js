import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Article from 'grommet-udacity/components/Article';
import Image from 'grommet-udacity/components/Image';
import Paragraph from 'grommet-udacity/components/Paragraph';
import { Author, PostTags } from 'components';

const SingleArticle = ({
  article,
}) => (
  <Box>
    <Article align="center" className={styles.singleArticle}>
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
    <Author author={article.user} />
    <PostTags article={article} />
  </Box>
);

SingleArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default cssModules(SingleArticle, styles);
