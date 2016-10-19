import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import { Author, ArticleMeta, SingleArticleContent } from 'components';

const SingleArticle = ({
  article,
}) => (
  <Box>
    <Section align="center">
      <SingleArticleContent article={article} />
    </Section>
    <Section align="center">
      <Author author={article.user} />
    </Section>
    <Section align="center">
      <ArticleMeta article={article} />
    </Section>
  </Box>
);

SingleArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default cssModules(SingleArticle, styles);
