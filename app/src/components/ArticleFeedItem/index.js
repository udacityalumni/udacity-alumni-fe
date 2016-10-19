import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Image from 'grommet-udacity/components/Image';
import Markdown from 'grommet-udacity/components/Markdown';
import Article from 'grommet-udacity/components/Article';
import Heading from 'grommet-udacity/components/Heading';
import Anchor from 'grommet-udacity/components/Anchor';

const ArticleFeedItem = ({
  article,
}) => (
  <Article className={styles.articleFeedItem}>
    <Heading>
      {article.title.slice(0, 30)}
    </Heading>
    {article.feature_image &&
      <Image src={article.feature_image} />
    }
    <Markdown content={article.content.slice(0, 300)} />
    <Anchor
      href={`/articles/${article.id}`}
      primary
      label="Read More"
    />
  </Article>
);

ArticleFeedItem.propTypes = {

};

export default cssModules(ArticleFeedItem, styles);
