import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const SinglePost = (props) => (
  <div className={styles.singlePost}>
     Hi!
  </div>
);

SinglePost.propTypes = {

};

export default cssModules(SinglePost, styles);
