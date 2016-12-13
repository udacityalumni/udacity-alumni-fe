import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Button from 'grommet-udacity/components/Button';
import SupportIcon from 'grommet-udacity/components/icons/base/Support';

const FeedbackButton = ({
  onClick,
}) => (
  <div className={styles.fabContainer}>
    <div className={styles.fab}>
      <Button
        className={styles.addButton}
        icon={
          <SupportIcon
            className={styles.icon}
          />
        }
        onClick={onClick}
        a11yTitle="Add Review Floating"
        a11yTitleId="add-review-floating-button"
      />
    </div>
  </div>
);

FeedbackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default cssModules(FeedbackButton, styles);
