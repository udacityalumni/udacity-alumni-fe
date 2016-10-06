import React, { PropTypes } from 'react';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const SessionMenu = ({
  onLogout,
  user,
}) => (
  <Menu
    icon={
      <img
        src={user.avatar}
        className={styles.userAvatar}
      />
    }
    dropAlign={{ bottom: 'bottom' }}
    a11yTitle="Session"
  >
    <Anchor href="/logout" onClick={onLogout}>Logout</Anchor>
  </Menu>
);

SessionMenu.propTypes = {
  user: PropTypes.object.isRequired,
};

export default cssModules(SessionMenu, styles);
