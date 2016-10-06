import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { SinglePostContainer } from 'containers';


// Pages map directly to Routes, i.e. one page equals on Route

const PostPage = () => (
  <div className={styles.container}>
    Hello from PostPage !
    <SinglePostContainer {...this.props} />
  </div>
);

export default cssModules(PostPage, styles);
