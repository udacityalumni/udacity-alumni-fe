import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';

const MainAside = ({
  user,
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
      src={user.avatar}
    />
    <Box
      className={styles.careerResourcesBlurb}
      basis="2/3"
      align="center"
      pad={{ horizontal: 'small', vertical: 'large' }}
    >
      <Heading tag="h3" align="center">
        {`Hello, ${user.name}!`}
      </Heading>
    </Box>
  </Box>
);

MainAside.propTypes = {
  user: PropTypes.object.isRequired,
};

export default cssModules(MainAside, styles);
