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
  ErrorAlert,
  ToastMessage,
  LoginForm,
} from 'components';


export const formFields = [
  'emailInput',
  'passwordInput',
];

class Login extends Component {
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
        this.context.router.push('/');
      }, 3000);
    }
  }
  handleErrorClose(index) {
    const {
      loginClearError,
    } = this.props.actions;
    loginClearError(index);
  }
  handleToastClose() {
    const {
      loginClearMessage,
    } = this.props.actions;
    loginClearMessage();
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
  render() {
    const {
      isLoading,
      errors,
      message,
      fields,
      invalid,
    } = this.props;
    return (
      <Section
        primary
        pad={{ horizontal: 'large' }}
        align="center"
        justify="center"
        className={styles.login}
      >
        {isLoading &&
          <LoadingIndicator
            message="Submitting"
            isLoading={isLoading}
          />
        }
        {errors && errors.length > 0 &&
          <ErrorAlert errors={errors} onClose={this.handleErrorClose} />
        }
        {message &&
          <ToastMessage message={message} onClose={this.handleToastClose} />
        }
        <Box
          size="large"
          className={styles.loginFormWrapper}
          align="center"
          pad={{ horizontal: 'small', vertical: 'small' }}
        >
          <LoginForm
            {...fields}
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
  errors: PropTypes.array,
  user: PropTypes.object,
  message: PropTypes.string,
  fields: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
};

Login.contextTypes = {
  router: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.loginContainer.user,
  errors: state.loginContainer.errors,
  loggedInUser: state.loginContainer.loggedInUser,
  isLoading: state.loginContainer.isLoading,
  message: state.loginContainer.message,
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
