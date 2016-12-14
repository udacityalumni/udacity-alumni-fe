import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Button from 'grommet-udacity/components/Button';
import AddIcon from 'grommet-udacity/components/icons/base/Add';

const FeedbackButton = ({
  onClick,
}) => (
  <div className={styles.fabContainer}>
    <div className={styles.fab}>
      <Button
        className={styles.addButton}
        icon={
          <AddIcon
            className={styles.icon}
          />
        }
        onClick={onClick}
      />
    </div>
  </div>
);

FeedbackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default cssModules(FeedbackButton, styles);
