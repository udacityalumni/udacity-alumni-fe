import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Tags from 'grommet-udacity/components/Tags';
import Tag from 'grommet-udacity/components/Tag';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Article from 'grommet-udacity/components/Article';
import Heading from 'grommet-udacity/components/Heading';
import Menu from 'grommet-udacity/components/Menu';
import SocialShare from 'grommet-udacity/components/SocialShare';
import Anchor from 'grommet-udacity/components/Anchor';

const ArticleMeta = ({
  article,
}) => (
  <Article className={styles.panel}>
    {article.tags && article.tags.length > 0 &&
      <Section>
        <Heading tag="h2" align="center">
          Article Tags
        </Heading>
        <Box
          justify="center"
          align="center"
          pad={{ vertical: 'medium' }}
        >
          <Tags align="center" justify="center">
            {article.tags.map((item, i) =>
              <Anchor
                key={i}
                href={`/archive?tag=${encodeURIComponent(item.tag)}`}
              >
                <Tag label={item.tag} />
              </Anchor>
            )}
          </Tags>
        </Box>
      </Section>
    }
    <Section>
      <Heading tag="h2" align="center">
        Share This Article
      </Heading>
      <Box align="center">
        <Menu
          inline
          direction="row"
          responsive={false}
        >
          <SocialShare
            a11yTitle="Go to Twitter to Share this article"
            type="twitter"
            link={`http://udacity-alumni.com/articles/${article.id}`}
            text={article.title}
          />
          <SocialShare
            a11yTitle="Go to Facebook to Share this article"
            type="facebook"
            link={`http://udacity-alumni.com/articles/${article.id}`}
            text={article.title}
          />
          <SocialShare
            a11yTitle="Go to linkedin to Share this article"
            type="linkedin"
            link={`http://udacity-alumni.com/articles/${article.id}`}
            text={article.title}
          />
          <SocialShare
            a11yTitle="Go to google to Share this article"
            type="google"
            link={`http://udacity-alumni.com/articles/${article.id}`}
            text={article.title}
          />
        </Menu>
      </Box>
    </Section>
  </Article>
);

ArticleMeta.propTypes = {
  article: PropTypes.shape({
    tags: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default cssModules(ArticleMeta, styles);
