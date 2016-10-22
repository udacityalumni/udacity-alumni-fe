import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import Article from 'grommet-udacity/components/Article';
import Image from 'grommet-udacity/components/Image';
import Markdown from 'grommet-udacity/components/Markdown';
import { ArticleCalendar } from 'components';

const SingleArticleContent = ({
  article,
}) => (
  <Article align="center" className={styles.singleArticle}>
    <div className={styles.articleDate}>
      <ArticleCalendar date={article.created_at} />
    </div>
    <Headline align="center">
      {article.title}
    </Headline>
    <Image src={article.feature_image} />
    <Box
      align="center"
      justify="center"
      className={`${styles.articleWrapper} markdown-body`}
      pad={{ horizontal: 'small' }}
    >
      <Markdown
        className={styles.content}
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
