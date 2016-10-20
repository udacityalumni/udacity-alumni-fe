import React, { PropTypes } from 'react';
import Layer from 'grommet-udacity/components/Layer';
import Button from 'grommet-udacity/components/Button';
import Footer from 'grommet-udacity/components/Footer';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import CheckmarkIcon from 'grommet-udacity/components/icons/base/Checkmark';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';

const ConfirmationModal = ({
  isVisible,
  onConfirm,
  onCancel,
  title,
}) => (
  <Layer
    closer
    hidden={!isVisible}
    onClose={onCancel}
    align="center"
  >
    <Box align="center" pad={{ horizontal: 'medium', vertical: 'medium' }}>
      <Heading align="center">
        {title}
      </Heading>
      <Footer
        align="center"
        justify="center"
        pad={{ horizontal: 'medium', vertical: 'medium' }}
      >
        <Button
          primary
          onClick={onConfirm}
          type="submit"
          label="Confirm"
          icon={<CheckmarkIcon />}
        />
        <Button
          onClick={onCancel}
          type="reset"
          label="Cancel"
          icon={<CloseIcon />}
        />
      </Footer>
    </Box>
  </Layer>
);

ConfirmationModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

ConfirmationModal.defaultProps = {
  title: 'Confirm',
};

export default ConfirmationModal;
