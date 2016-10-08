import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const Author = (props) => (
  <div className={styles.author}>
  </div>
);

Author.propTypes = {

};

export default cssModules(Author, styles);
