import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet-udacity/components/Heading';
import Anchor from 'grommet-udacity/components/Anchor';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Card from 'grommet-udacity/components/Card';
import Tiles from 'grommet-udacity/components/Tiles';
import Tile from 'grommet-udacity/components/Tile';

const SpotlightArticles = ({
  articles,
}) => (
  <Section pad="small" direction="column" pad={{ vertical: 'medium' }}>
    <Heading tag="h2" align="center">
      Spotlight Articles
    </Heading>
    <Box pad={{ vertical: 'small' }} direction="row">
      <Tiles flush fill className={styles.featuredArticlesContainer}>
        {articles.map((article, i) =>
          <Tile
            key={i}
            align="start"
            basis="small"
            direction="row"
            separator="bottom"
            className={styles.featuredArticle}
          >
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
          </Tile>
        )}
      </Tiles>
    </Box>
  </Section>
);

SpotlightArticles.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default cssModules(SpotlightArticles, styles);
