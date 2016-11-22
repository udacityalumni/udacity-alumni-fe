import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Button from 'grommet/components/button';

const FeedbackButton = ({
  onClick,
}) => (
  <div className={styles.container}>
    <Button
      onClick={onClick}
      href="#"
      label="Feedback"
      primary
    />
  </div>
);


FeedbackButton.propTypes = {
  onClick: PropTypes.func,
};

export default cssModules(FeedbackButton, styles);
