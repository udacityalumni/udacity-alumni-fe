import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { ContentDashboardContainer } from 'containers';

class ContentDashboardPage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ContentDashboardContainer
          user={{
            name: 'David Harris',
            isLoggedIn: false,
            isAdmin: false,
            avatar: 'http://1onjea25cyhx3uvxgs4vu325.wpengine.netdna-cdn.com/wp-content/uploads/2016/05/image08.png',
          }}
        />
      </div>
    );
  }
}

export default cssModules(ContentDashboardPage, styles);
