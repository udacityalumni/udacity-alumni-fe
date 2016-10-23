import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Heading';
import Paragraph from 'grommet-udacity/components/Paragraph';
import { Avatar } from 'components';

const Member = ({
  user,
}) => (
  <Box
    className={styles.member}
    align="center"
    justify="center"
    size="large"
  >
    <Avatar src={user.avatar} />
    <Heading tag="h3" align="center">
      {user.name}
    </Heading>
    <Paragraph>
      {`${user.bio.slice(0, 120)}...`}
    </Paragraph>
  </Box>
);

Member.propTypes = {
  user: PropTypes.object.isRequired,
};

export default cssModules(Member, styles);
