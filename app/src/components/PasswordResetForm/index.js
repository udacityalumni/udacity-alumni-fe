import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import calculatedError from './utils/error';
import Box from 'grommet-udacity/components/Box';
import Form from 'grommet-udacity/components/Form';
import FormFields from 'grommet-udacity/components/FormFields';
import FormField from 'grommet-udacity/components/FormField';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import Heading from 'grommet-udacity/components/Heading';

const checkMatches = (field1, field2) =>
  field1.value !== field2.value && field2.touched ?
    'Passwords must match' : null;

const PasswordResetForm = ({
  passwordInput,
  passwordConfirmationInput,
  onSubmit,
  invalid,
}) => (
  <Box
    className={styles.passwordResetForm}
    pad={{ horizontal: 'large' }}
  >
    <Form>
      <Box align="center" justify="center">
        <img
          style={{ maxWidth: 150, height: 'auto' }}
          src="https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/udacity-alumni-png.png?raw=true"
        />
      </Box>
      <Heading strong align="center">
        Udacity Alumni
      </Heading>
      <Heading align="center" tag="h5">
        Reset Password
      </Heading>
      <FormFields className={styles.formFields}>
        <FormField
          help="Enter a secure password"
          error={calculatedError(passwordInput)}
          label="Password *"
          htmlFor="passwordInput"
          className={styles.formField}
        >
          <input
            {...passwordInput}
            required
            id="passwordInput"
            name="password"
            type="password"
            autoComplete="off"
            aria-required
            aria-invalid={passwordInput.error}
            className={styles.input}
          />
        </FormField>
        <FormField
          help="Confirm your password"
          label="Password Confirmation *"
          htmlFor="passwordConfirmationInput"
          className={styles.formField}
          error={
            calculatedError(passwordConfirmationInput) ||
              checkMatches(passwordInput, passwordConfirmationInput)
          }
        >
          <input
            {...passwordConfirmationInput}
            required
            id="passwordConfirmationInput"
            type="password"
            aria-invalid={passwordConfirmationInput.error}
            aria-required
            name="password"
            className={styles.input}
          />
        </FormField>
      </FormFields>
      <Footer pad={{ vertical: 'medium' }} align="center">
        <Button
          onClick={
            invalid ||
              checkMatches(passwordInput, passwordConfirmationInput) !== null ?
                null : onSubmit
          }
          fill
          label="Submit"
          primary
        />
      </Footer>
    </Form>
  </Box>
);

PasswordResetForm.propTypes = {
  invalid: PropTypes.bool.isRequired,
  passwordInput: PropTypes.string.isRequired,
  passwordConfirmationInput: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default cssModules(PasswordResetForm, styles);
