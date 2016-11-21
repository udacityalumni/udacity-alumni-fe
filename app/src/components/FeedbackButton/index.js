import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const FeedbackButton = (props) => (
  <div className={styles.feedbackButton}>
  </div>
);

FeedbackButton.propTypes = {

};

export default cssModules(FeedbackButton, styles);
