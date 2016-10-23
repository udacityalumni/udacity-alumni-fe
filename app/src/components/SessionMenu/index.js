import React, { PropTypes } from 'react';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const NoUserMenu = () => (
  <Menu
    direction="row"
    align="center"
    inline
    resposive={false}
    className={styles.rightMenu}
  >
    <Anchor href="/login">
      Log In
    </Anchor>
    <Anchor href="/signup">
      Sign Up
    </Anchor>
  </Menu>
);

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
  <span>
    {(() => { // eslint-disable-line
      if (user) {
        switch (user.role) {
          case 'user':
            return (
              <Menu
                icon={<SessionIcon user={user} />}
                inline={false}
                dropAlign={{ bottom: 'bottom' }}
                a11yTitle="Session"
                className={styles.rightMenu}
              >
                <Anchor href="/me/profile">
                  My Profile
                </Anchor>
                <Anchor href="/logout" onClick={onLogout}>
                  Logout
                </Anchor>
              </Menu>
            );
          case 'admin':
            return (
              <Menu
                icon={<SessionIcon user={user} />}
                dropAlign={{ bottom: 'bottom' }}
                a11yTitle="Session"
                inline={false}
                className={styles.rightMenu}
              >
                <Anchor href="/me/profile">
                  My Profile
                </Anchor>
                <Anchor href="/admin/content-dashboard">
                  Dashboard
                </Anchor>
                <Anchor href="/admin/cms?action=new">
                  New Post
                </Anchor>
                <Anchor href="/logout" onClick={onLogout}>
                  Logout
                </Anchor>
              </Menu>
            );
          default:
            return (
              <NoUserMenu />
            );
        }
      } else {
        return (
          <NoUserMenu />
        );
      }
    })()}
  </span>
);

SessionMenu.propTypes = {
  user: PropTypes.object,
};

export default cssModules(SessionMenu, styles);
