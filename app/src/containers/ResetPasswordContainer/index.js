import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ResetPasswordActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import { PasswordResetForm } from 'components';
import validation from './utils/validation';
import { reduxForm } from 'redux-form';

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
    if (query.token != null) {
      // Do something with the token
    }
  }
  handleSubmit() {

  }
  render() {
    const {
      fields,
      invalid,
    } = this.props;
    return (
      <Section
        primary
        pad={{ horizontal: 'large' }}
        align="center"
        justify="center"
        className={styles.resetPassword}
      >
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
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ResetPasswordActionCreators,
    dispatch
  ),
});

const Container = cssModules(ResetPasswordContainer, styles);

const FormContainer = reduxForm({
  form: 'ResetPassword',
  fields: formFields,
  validate: validation,
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
