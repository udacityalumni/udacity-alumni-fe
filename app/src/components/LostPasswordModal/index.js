import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Layer from 'grommet-udacity/components/Layer';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Form from 'grommet-udacity/components/Form';
import FormField from 'grommet-udacity/components/FormField';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';

const LostPasswordModal = ({
  isVisible,
  onClose,
  emailField,
  onSubmit,
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
      <Form className={styles.form}>
        <Box direction="row" style={{ width: '100%' }}>
          <FormField>
            <input
              {...emailField}
              placeholder="david@udacity.com"
              type="text"
              name="email"
            />
          </FormField>
          <Button style={{ marginLeft: 20 }} onClick={onSubmit} label="Submit" />
        </Box>
      </Form>
    </Box>
  </Layer>
);

LostPasswordModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  emailInput: PropTypes.string,
  onChangeEmailInput: PropTypes.func.isRequired,
};

export default cssModules(LostPasswordModal, styles);
