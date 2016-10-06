import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const SinglePost = ({
  article,
}) => (
  <div className={styles.singlePost}>
    <h2>Hi! Here is {article.id}</h2>
  </div>
);

SinglePost.propTypes = {
  article: PropTypes.object.isRequired,
};

export default cssModules(SinglePost, styles);
