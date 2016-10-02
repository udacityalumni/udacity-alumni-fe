import React, { PropTypes } from 'react';
import Toast from 'grommet-udacity/components/Toast';

const ToastMessage = ({
  message,
  onClose,
  status,
}) => (
  <Toast status={status} onClose={onClose}>
    {message}
  </Toast>
);

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  status: PropTypes.oneOf([
    'critical',
    'warning',
    'ok',
    'disabled',
    'unknown',
  ]),
};

ToastMessage.defaultProps = {
  status: 'ok',
};

export default ToastMessage;
