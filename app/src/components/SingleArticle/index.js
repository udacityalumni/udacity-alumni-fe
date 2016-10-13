import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Headline from 'grommet-udacity/components/Headline';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import Article from 'grommet-udacity/components/Article';
import Image from 'grommet-udacity/components/Image';
import Markdown from 'grommet-udacity/components/Markdown';
import { Author, ArticleMeta } from 'components';

const SingleArticle = ({
  article,
}) => (
  <Box>
    <Section align="center">
      <Article align="center" className={styles.singleArticle}>
        <Headline align="center">
          {article.title}
        </Headline>
        <Image src={article.feature_image} full="true" />
        <Box
          align="center"
          justify="center"
          className="markdown-body"
          pad={{ horizontal: 'small' }}
        >
          <Markdown
            content={article.content}
            components={{
              h1: { props: { strong: true } },
              h2: { props: { strong: true } },
              p: { props: { size: 'large' } },
              img: { props: { size: 'small' } },
            }}
          />
        </Box>
      </Article>
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
