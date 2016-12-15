import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SignupActionCreators from './actions';
import * as AppActions from '../AppContainer/actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import validation from './utils/validations';
import { reduxForm } from 'redux-form';
import {
  LoadingIndicator,
  ErrorAlert,
  SignupForm,
  ToastMessage,
} from 'components';

export const formFields = [
  'nameInput',
  'emailInput',
  'passwordInput',
  'passwordConfirmationInput',
];

class Signup extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);
    this.handleToastClose = this.handleToastClose.bind(this);
  }
  componentWillReceiveProps({ user }) {
    if (user) {
      const {
        actions,
      } = this.props;
      actions.setPersistentUser(user);
      setTimeout(() => {
        this.context.router.push('/me/profile');
      }, 3000);
    }
  }
  handleSubmit() {
    const {
      nameInput,
      emailInput,
      passwordInput,
      passwordConfirmationInput,
    } = this.props.fields;
    this.props.actions.handleSignup({
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      passwordConfirmation: passwordConfirmationInput.value,
    });
  }
  handleErrorClose() {
    const {
      clearSignupError,
    } = this.props.actions;
    clearSignupError();
  }
  handleToastClose() {
    const {
      signupClearMessage,
    } = this.props.actions;
    signupClearMessage();
  }
  render() {
    const {
      fields,
      isLoading,
      errorMessage,
      valid,
      message,
    } = this.props;
    return (
      <Section
        primary
        pad={{ horizontal: 'large' }}
        align="center"
        justify="center"
        className={styles.signup}
      >
        {message &&
          <ToastMessage
            message={message}
            onClose={this.handleToastClose}
          />
        }
        {isLoading &&
          <LoadingIndicator
            message="Submitting"
            isLoading={isLoading}
          />
        }
        {errorMessage &&
          <ErrorAlert
            errors={[new Error(errorMessage)]}
            onClose={this.handleErrorClose}
          />
        }
        <Box
          size="large"
          className={styles.loginFormWrapper}
          align="center"
          pad={{ horizontal: 'small', vertical: 'small' }}
        >
          <SignupForm
            {...fields}
            isValid={valid}
            onSubmit={this.handleSubmit}
          />
        </Box>
      </Section>
    );
  }
}

Signup.propTypes = {
  fields: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

Signup.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  errorMessage: state.signupContainer.error,
  isLoading: state.signupContainer.isLoading,
  user: state.signupContainer.user,
  message: state.signupContainer.message,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({},
      SignupActionCreators,
      AppActions,
    ),
    dispatch
  ),
});

const Container = cssModules(Signup, styles);

const FormContainer = reduxForm({
  form: 'Signup',
  fields: formFields,
  validate: validation,
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
