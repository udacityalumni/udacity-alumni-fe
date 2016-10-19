import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import Article from 'grommet-udacity/components/Article';
import Image from 'grommet-udacity/components/Image';
import Markdown from 'grommet-udacity/components/Markdown';

const SingleArticleContent = ({
  article,
}) => (
  <Article align="center" className={styles.singleArticle}>
    <Headline align="center">
      {article.title}
    </Headline>
    <Image src={article.feature_image} />
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
);

SingleArticleContent.propTypes = {
  article: PropTypes.object.isRequired,
};

export default cssModules(SingleArticleContent, styles);
