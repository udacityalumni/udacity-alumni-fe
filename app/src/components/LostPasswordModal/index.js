import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Layer from 'grommet-udacity/components/Layer';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Form from 'grommet-udacity/components/Form';
import FormField from 'grommet-udacity/components/FormField';
import Button from 'grommet-udacity/components/Button';
import { LoadingIndicator, ErrorAlert } from 'components';

const LostPasswordModal = ({
  isVisible,
  onClose,
  emailInput,
  onSubmit,
  onChangeEmailInput,
  didSubmit,
  isLoading,
  error,
  onClearError,
}) => (
  <Layer
    closer
    align="center"
    onClose={onClose}
    hidden={!isVisible}
    className={styles.lostPasswordModal}
  >
    <Box pad="medium" className={styles.outerBox}>
      <Box pad="medium" className={styles.innerBox}>
        <Heading align="center">
          Reset Your Password
        </Heading>
        <Heading align="center" tag="h5">
          Please provide the email address that you used when you signed up for the site.
        </Heading>
        <Heading align="center" tag="h5">
          We will send you an email with a link you can use to reset your password.
        </Heading>
      </Box>
      {didSubmit ?
        <Box align="center">
          <Heading align="center" tag="h3">
            Success!  Check your email for instructions to complete the process.
          </Heading>
          <Button
            onClick={onClose}
            label="Close"
            className={styles.button}
          />
        </Box>
      :
        <Form className={styles.form}>
          <Box direction="row" style={{ width: '100%' }}>
            <FormField className={styles.formField}>
              <input
                value={emailInput}
                onChange={onChangeEmailInput}
                placeholder="david@udacity.com"
                type="text"
                name="email"
              />
            </FormField>
            <Button
              primary
              className={styles.button}
              onClick={onSubmit}
              label="Submit"
            />
          </Box>
        </Form>
      }
    </Box>
    {isLoading && <LoadingIndicator message="Submitting" isLoading={isLoading} />}
    {error && <ErrorAlert errors={[error]} onClose={onClearError} />}
  </Layer>
);

LostPasswordModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  emailInput: PropTypes.string,
  onChangeEmailInput: PropTypes.func.isRequired,
  didSubmit: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  onClearError: PropTypes.func.isRequired,
};

export default cssModules(LostPasswordModal, styles);
