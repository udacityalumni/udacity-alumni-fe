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
              >
                <Anchor href="/me/profile">
                  My Profile
                </Anchor>
                <Anchor href="/admin/content-dashboard">
                  Admin Dashboard
                </Anchor>
                <Anchor href="/admin/cms?new=true">
                  Post an Article
                </Anchor>
                <Anchor href="/logout" onClick={onLogout}>
                  Logout
                </Anchor>
              </Menu>
            );
          default:
            return (
              <Menu
                direction="row"
                align="center"
              >
                <Anchor href="/login">
                  Log In
                </Anchor>
                <Anchor href="/signup">
                  Sign Up
                </Anchor>
              </Menu>
            );
        }
      } else {
        return (
          <Menu
            direction="row"
            align="center"
          >
            <Anchor href="/login">
              Log In
            </Anchor>
            <Anchor href="/signup">
              Sign Up
            </Anchor>
          </Menu>
        );
      }
    })()}
  </span>
);

SessionMenu.propTypes = {
  user: PropTypes.object,
};

export default cssModules(SessionMenu, styles);
