import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Tiles from 'grommet-udacity/components/Tiles';
import Tile from 'grommet-udacity/components/Tile';
import { ArticlePreview, Divider } from 'components';

const SpotlightArticles = ({
  articles,
}) => (
  <Section pad="small" direction="column" pad={{ vertical: 'medium' }}>
    <Headline tag="h2" align="center">
      Spotlight Articles
    </Headline>
    <Divider />
    <Box pad={{ vertical: 'small' }} direction="row">
      {articles && articles.length > 0 ?
        <Tiles flush fill className={styles.featuredArticlesContainer}>
          {articles.map((article, i) =>
            <Tile
              key={i}
              align="start"
              justify="center"
              basis="small"
              direction="row"
              separator="bottom"
              className={styles.featuredArticle}
            >
              <ArticlePreview article={article} />
            </Tile>
          )}
        </Tiles>
      :
        <Section
          className="full-height"
          align="center"
          justify="center"
        >
          <Heading align="center" tag="h1">
            No Articles
          </Heading>
        </Section>
      }
    </Box>
  </Section>
);

SpotlightArticles.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default cssModules(SpotlightArticles, styles);
