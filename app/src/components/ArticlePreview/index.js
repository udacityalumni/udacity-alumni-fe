import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Anchor from 'grommet-udacity/components/Anchor';
import Box from 'grommet-udacity/components/Box';
import Card from 'grommet-udacity/components/Card';
import MissingVisual from './missing-visual.png';
import { highlightContent } from './utils';

const ArticlePreview = ({
  article,
  searchTerm,
}) => {
  // const formattedTitle = highlightTitle(searchTerm, article.title);
  // const formattedLabel = highlightTitle(searchTerm, article.user.name);
  const formattedDescription = highlightContent(searchTerm, article.content);
  return (
    <Box
      className={styles.articlePreview}
      size="medium"
      pad={{ vertical: 'medium' }}
    >
      <Card
        label={`By ${article.user.name}`}
        thumbnail={article.feature_image || MissingVisual}
        heading={article.title.slice(0, 15)}
        description={formattedDescription}
        link={
          <Anchor
            href={`/articles/${article.slug}`}
            primary
            label="Read More"
          />
        }
      />
    </Box>
  );
};

ArticlePreview.propTypes = {
  article: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    feature_image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    searchTerm: PropTypes.searchTerm,
  }),
};

export default cssModules(ArticlePreview, styles);
