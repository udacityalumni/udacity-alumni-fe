import React, { PropTypes } from 'react';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const SessionIcon = ({
  user,
}) => (
  <Box
    responsive={false}
    direction="row"
    justify="center"
  >
    <img
      src={user.avatar}
      className={styles.userAvatar}
    />
    <Heading tag="h4" className={styles.profileName}>
      {user.name}
    </Heading>
  </Box>
);

const SessionMenu = ({
  onLogout,
  user,
}) => (
  <Menu
    icon={<SessionIcon user={user} />}
    dropAlign={{ bottom: 'bottom' }}
    a11yTitle="Session"
  >
    <Anchor href="/profile">Profile</Anchor>
    <Anchor href="/logout" onClick={onLogout}>Logout</Anchor>
  </Menu>
);

SessionMenu.propTypes = {
  user: PropTypes.object.isRequired,
};

export default cssModules(SessionMenu, styles);
