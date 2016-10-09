import React, { PropTypes } from 'react';
import Anchor from 'grommet-udacity/components/Anchor';
import Box from 'grommet-udacity/components/Box';
import Card from 'grommet-udacity/components/Card';


const ArticlePreview = ({
  article,
}) => (
  <Box size="medium" pad={{ vertical: 'medium' }}>
    <Card
      label={`By ${article.user.name}`}
      thumbnail={article.feature_image}
      heading={article.title.slice(0, 15)}
      description={`${article.content.slice(0, 200)}...`}
      link={
        <Anchor
          href={`/articles/${article.id}`}
          primary
          label="Read More"
        />
      }
    />
  </Box>
);

ArticlePreview.propTypes = {
  article: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    feature_image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default ArticlePreview;
