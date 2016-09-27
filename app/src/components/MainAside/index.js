import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';

const MainAside = ({
  avatarImage,
  careerResourcesParagraph,
}) => (
  <Box
    basis="1/3"
    pad="medium"
    align="center"
    className={styles.aside}
  >
    <Image
      className={styles.avatarImage}
      size="medium"
      src={avatarImage}
    />
    <Box
      className={styles.careerResourcesBlurb}
      basis="2/3"
      align="center"
      pad={{ horizontal: 'small', vertical: 'large' }}
    >
      <Heading align="start" tag="h3">
        Career Resources
      </Heading>
      <Paragraph>
        {careerResourcesParagraph}
      </Paragraph>
    </Box>
  </Box>
);

MainAside.propTypes = {
  avatarImage: PropTypes.string.isRequired,
  careerResourcesParagraph: PropTypes.string.isRequired,
};

export default cssModules(MainAside, styles);
