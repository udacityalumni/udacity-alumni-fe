import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Image from 'grommet-udacity/components/Image';
import Markdown from 'grommet-udacity/components/Markdown';
import Article from 'grommet-udacity/components/Article';
import Heading from 'grommet-udacity/components/Heading';
import Anchor from 'grommet-udacity/components/Anchor';
import Box from 'grommet-udacity/components/Box';
import Label from 'grommet-udacity/components/Label';
import { LinkList, ArticleCalendar } from 'components';

const ArticleFeedItem = ({
  article,
}) => (
  <Article className={styles.articleFeedItem}>
    <div className={styles.articleDate}>
      <ArticleCalendar date={article.created_at} />
    </div>
    <LinkList links={article.tags} />
    <Heading strong align="start" tag="h2">
      {article.title.slice(0, 30)}
    </Heading>
    {article.feature_image &&
      <Image src={article.feature_image} />
    }
    <Markdown
      content={`${article.content.slice(0, 350)}...`}
    />
    <Box align="start" direction="row" justify="center">
      <div className={styles.readMoreWrapper}>
        <Anchor
          href={`/articles/${article.id}`}
          primary
          label="Read More"
        />
      </div>
      <Label uppercase>
        - {article.user.name}
      </Label>
    </Box>
  </Article>
);

ArticleFeedItem.propTypes = {
  article: PropTypes.object.isRequired,
};

export default cssModules(ArticleFeedItem, styles);
