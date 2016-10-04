import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const SinglePost = (props) => (
  <div className={styles.singlePost}>
     Hi! Here is {props.article.id}
  </div>
);

SinglePost.propTypes = {
  article: PropTypes.object.isRequired,
};

export default cssModules(SinglePost, styles);
