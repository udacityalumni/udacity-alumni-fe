import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ResetPasswordActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import { PasswordResetForm, LoadingIndicator, ToastMessage } from 'components';
import validation from './utils/validation';
import { reduxForm } from 'redux-form';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const formFields = [
  'passwordInput',
  'passwordConfirmationInput',
];

class ResetPasswordContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const {
      query,
    } = this.props.location;
    if (query.reset_password_token == null) { // eslint-disable-line
      // Do something with the token
      this.context.router.push('/login');
    }
  }
  handleSubmit() {
    this.props.actions.resetPasswordRequestInitiation();
    this.props.submitPasswordResetRequest()
      .then(() => {
        this.props.actions.resetPasswordRequestSuccess();
      }).catch(err => {
        this.props.actions.resetPasswordRequestFailure(err);
      });
  }
  render() {
    const {
      fields,
      invalid,
      isLoading,
      errorLoading,
      actions,
    } = this.props;
    return (
      <Section
        primary
        pad={{ horizontal: 'large' }}
        align="center"
        justify="center"
        className={styles.resetPassword}
      >
        {isLoading &&
          <LoadingIndicator
            message="Submitting"
            isLoading={isLoading}
          />
        }
        {errorLoading &&
          <ToastMessage
            message={errorLoading.message}
            status="critical"
            onClose={() => actions.resetPasswordClearError()}
          />
        }
        <Box
          size="large"
          className={styles.loginFormWrapper}
          align="center"
          pad={{ horizontal: 'small', vertical: 'small' }}
        >
          <PasswordResetForm
            {...fields}
            invalid={invalid}
            onSubmit={this.handleSubmit}
          />
        </Box>
      </Section>
    );
  }
}

ResetPasswordContainer.propTypes = {
  fields: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  submitPasswordResetRequest: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorLoading: PropTypes.object,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isLoading: state.resetPassword.isLoading,
  errorLoading: state.resetPassword.error,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ResetPasswordActionCreators,
    dispatch
  ),
});

const Container = cssModules(ResetPasswordContainer, styles);

const resetPasswordMutation = gql`
mutation updatePassword($password: String!, $password_confirmation: String!, $token: String!){
  ResetPassword(input: {
    password: $password,
    password_confirmation: $password_confirmation,
    token: $token
  }) {
      user {
        id
      }
    }
  }
`;

const ContainerWithMutation = graphql(resetPasswordMutation, {
  options: (ownProps) => ({
    skip: !ownProps.location.query.reset_password_token,
    variables: {
      password: ownProps.fields.passwordInput.value,
      password_confirmation: ownProps.fields.passwordConfirmationInput.value,
      token: ownProps.location.query.reset_password_token,
    },
  }),
  props: ({ mutate }) => ({
    submitPasswordResetRequest: mutate,
  }),
})(Container);

const FormContainer = reduxForm({
  form: 'ResetPassword',
  fields: formFields,
  validate: validation,
})(ContainerWithMutation);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
