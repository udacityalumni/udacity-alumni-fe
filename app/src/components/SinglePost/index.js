import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const SinglePost = ({
  article,
}) => (
  <div className={styles.singlePost}>
    Hello {article.user.name}
  </div>
);

SinglePost.propTypes = {
  article: PropTypes.object.isRequired,
};

export default cssModules(SinglePost, styles);
