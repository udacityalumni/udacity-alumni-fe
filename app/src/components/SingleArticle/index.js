import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet-udacity/components/Heading';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import Article from 'grommet-udacity/components/Article';
import Image from 'grommet-udacity/components/Image';
import Paragraph from 'grommet-udacity/components/Paragraph';
import { Author, ArticleMeta } from 'components';

const SingleArticle = ({
  article,
}) => (
  <Box>
    <Section>
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
    </Section>
    <Section>
      <Author author={article.user} />
    </Section>
    <Section>
      <ArticleMeta article={article} />
    </Section>
  </Box>
);

SingleArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default cssModules(SingleArticle, styles);
