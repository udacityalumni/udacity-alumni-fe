import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const ArticleFeedItem = (props) => (
  <div className={styles.articleFeedItem}>
  </div>
);

ArticleFeedItem.propTypes = {

};

export default cssModules(ArticleFeedItem, styles);
