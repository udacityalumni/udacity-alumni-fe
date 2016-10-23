import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Anchor from 'grommet-udacity/components/Anchor';
import Box from 'grommet-udacity/components/Box';

const LinkList = ({
  links,
  seperator,
}) => (
  <Box direction="row" responsive={false} wrap>
    {links.map((link, i) => {
      const s = i < links.length - 1 ? `${seperator} ` : '';
      return (
        <span>
          <Anchor
            label={`${link.tag}`}
            key={i}
            className={styles.tagLink}
            href={`/archive?tag=${encodeURIComponent(link.tag)}`}
          />
          {s}
        </span>
      );
    })}
  </Box>
);

LinkList.propTypes = {
  links: PropTypes.array.isRequired,
  seperator: PropTypes.string.isRequired,
};

LinkList.defaultProps = {
  seperator: ',',
};

export default cssModules(LinkList, styles);
