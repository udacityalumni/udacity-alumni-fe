import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Form from 'grommet-udacity/components/Form';
import Heading from 'grommet-udacity/components/Heading';
import FormField from 'grommet-udacity/components/FormField';
import FormFields from 'grommet-udacity/components/FormFields';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import Box from 'grommet-udacity/components/Box';
import Anchor from 'grommet-udacity/components/Anchor';
import { AuthFormFooter } from 'components';
import calculatedError from './utils/error';

const LoginForm = ({
  passwordInput,
  emailInput,
  onSubmit,
  invalid,
  onForgotPassword,
}) => (
  <Box
    className={styles.loginForm}
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
        Login
      </Heading>
      <FormFields className={styles.formFields}>
        <FormField
          help="Enter the email you used to create your account"
          error={calculatedError(emailInput)}
          label="Email *"
          htmlFor="emailInput"
          className={styles.formField}
        >
          <input
            {...emailInput}
            required
            id="emailInput"
            name="email"
            placeholder="me@udacity.com"
            type="email"
          />
        </FormField>
        <FormField
          help="Enter the password you used to create your account"
          error={calculatedError(passwordInput)}
          label="Password *"
          htmlFor="passwordInput"
          className={styles.formField}
        >
          <input
            {...passwordInput}
            required
            name="password"
            id="passwordInput"
            type="password"
          />
        </FormField>
      </FormFields>
      <Footer pad={{ vertical: 'medium' }} align="center">
        <Button onClick={invalid ? null : onSubmit} fill label="Submit" primary />
      </Footer>
      <AuthFormFooter text="Need an Account?" link="/signup" />
      <Box align="center" justify="center">
        <Anchor onClick={onForgotPassword}>
          Forgot Your Password?
        </Anchor>
      </Box>
    </Form>
  </Box>
);

LoginForm.propTypes = {
  passwordInput: PropTypes.object.isRequired,
  emailInput: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  onForgotPassword: PropTypes.func.isRequired,
};

export default cssModules(LoginForm, styles);
