import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Notification from 'grommet/components/notification';
import CloseIcon from 'grommet/components/icons/base/Close';
import Button from 'grommet/components/button';
import Section from 'grommet/components/Section';

const ErrorAlert = ({
  errors,
  onClose,
}) => (
  <Section className={styles.errorAlert}>
    {errors.length > 0 && errors.map((error, i) =>
      <div key={i} className={styles.error}>
        <div className="error-alert__closer">
          <Button
            plain
            onClick={() => onClose(i)}
            className={styles.closeButton}
            a11yTitle="Close Alert"
          >
            <CloseIcon a11yTitle="Close Alert" />
          </Button>
        </div>
        <Notification
          role="alert"
          style={{ paddingTop: 10 }}
          status="critical"
          a11yTitle="Submission Failed"
          size="small"
          message={error.message}
        />
      </div>
    )}
  </Section>
);

ErrorAlert.propTypes = {
  errors: PropTypes.array,
  onClose: PropTypes.func.isRequired,
};

export default cssModules(ErrorAlert, styles);
