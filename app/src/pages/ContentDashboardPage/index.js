import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { ContentDashboardContainer } from 'containers';

class ContentDashboardPage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ContentDashboardContainer />
      </div>
    );
  }
}

export default cssModules(ContentDashboardPage, styles);
