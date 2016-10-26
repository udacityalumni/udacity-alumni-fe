import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActionCreators from './actions';
import * as AppActions from '../../components/App/actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import validation from './utils/validation';
import { reduxForm } from 'redux-form';
import {
  LoadingIndicator,
  ToastMessage,
  LoginForm,
  LostPasswordModal,
} from 'components';

export const formFields = [
  'emailInput',
  'passwordInput',
];

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitLostPassword = this.handleSubmitLostPassword.bind(this);
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
      actions,
      fields,
    } = this.props;
    const data = {
      email: fields.emailInput.value,
      password: fields.passwordInput.value,
    };
    actions.performLogin(data);
  }
  handleSubmitLostPassword() {
    // TODO: implement me.
    // The email address is stored in the
    // this.props.emailInput state
  }
  render() {
    const {
      isLoading,
      errorMessage,
      message,
      fields,
      invalid,
      actions,
      isShowingModal,
      emailInput,
    } = this.props;
    return (
      <Section
        primary
        pad={{ horizontal: 'large' }}
        align="center"
        justify="center"
        className={styles.login}
      >
        <LostPasswordModal
          emailInput={emailInput}
          onChangeEmailInput={({ target }) => actions.forgotPasswordSetEmailInput(target.value)}
          onClose={() => actions.handleToggleForgotPassword()}
          onSubmit={this.handleSubmitLostPassword}
          isVisible={isShowingModal}
        />
        {isLoading &&
          <LoadingIndicator
            message="Submitting"
            isLoading={isLoading}
          />
        }
        {errorMessage &&
          <ToastMessage
            message={errorMessage}
            status="critical"
            onClose={() => actions.loginClearError()}
          />
        }
        {message &&
          <ToastMessage
            message={message}
            onClose={() => actions.loginClearMessage()}
          />
        }
        <Box
          size="large"
          className={styles.loginFormWrapper}
          align="center"
          pad={{ horizontal: 'small', vertical: 'small' }}
        >
          <LoginForm
            {...fields}
            onForgotPassword={() => actions.handleToggleForgotPassword()}
            invalid={invalid}
            onSubmit={this.handleSubmit}
          />
        </Box>
      </Section>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loggedInUser: PropTypes.object,
  errorMessage: PropTypes.string,
  user: PropTypes.object,
  message: PropTypes.string,
  fields: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
  isShowingModal: PropTypes.bool.isRequired,
  emailInput: PropTypes.string,
};

Login.contextTypes = {
  router: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.loginContainer.user,
  errorMessage: state.loginContainer.error,
  loggedInUser: state.loginContainer.loggedInUser,
  isLoading: state.loginContainer.isLoading,
  message: state.loginContainer.message,
  isShowingModal: state.loginContainer.forgotPassword.isShowingModal,
  emailInput: state.loginContainer.forgotPassword.emailInput,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({},
      LoginActionCreators,
      AppActions
    ),
    dispatch
  ),
});

const Container = cssModules(Login, styles);

const FormContainer = reduxForm({
  form: 'Login',
  fields: formFields,
  validate: validation,
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
