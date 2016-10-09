import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SignupActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import validation from './utils/validations';
import { reduxForm } from 'redux-form';
import { LoadingIndicator, ErrorAlert, SignupForm } from 'components';

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
  }
  handleSubmit(params) {
    const {
      submitSignupRequest,
    } = this.props.actions;
    submitSignupRequest(params);
  }
  handleErrorClose(index) {
    const {
      clearSignupError,
    } = this.props.actions;
    clearSignupError(index);
  }
  render() {
    const {
      fields,
      isLoading,
      errorMessage,
    } = this.props;
    return (
      <Section
        pad={{ horizontal: 'large' }}
        align="center"
        justify="center"
        className={styles.signup}
      >
        {isLoading &&
          <LoadingIndicator
            message="Submitting"
            isLoading={isLoading}
          />
        }
        {errorMessage &&
          <ErrorAlert errors={[new Error(errorMessage)]} onClose={this.handleErrorClose} />
        }
        <SignupForm
          {...fields}
          onSubmit={this.handleSubmit}
        />
      </Section>
    );
  }
}

Signup.propTypes = {
  fields: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  errorMessage: state.signupContainer.error,
  isLoading: state.signupContainer.isLoading,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    SignupActionCreators,
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
