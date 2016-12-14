import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import * as FeedbackActionCreators from './actions';
import styles from './index.module.scss';
import {
  FeedbackButton,
  AddFeedbackForm,
  LoadingIndicator,
 } from 'components';
import validation from './validation/index';
import { reduxForm } from 'redux-form';
import Layer from 'grommet-udacity/components/Layer';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import { BASE_URL } from 'config';

export const addFeedbackFields = [
  'nameInput',
  'urlInput',
  'descriptionInput',
];

class FeedbackContainer extends Component {
  constructor() {
    super();
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleSubmitFeedback = this.handleSubmitFeedback.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  componentWillReceiveProps({ fields, user, location }) {
    if (location && !fields.urlInput.value) {
      const APPEND_LOCATION = location.pathname
                                .substring(1, (location.pathname.length));
      fields.urlInput.onChange(`${BASE_URL}${APPEND_LOCATION}`);
    }
    if (location && !fields.nameInput.value) {
      if (user) {
        fields.nameInput.onChange(user.name);
      } else {
        fields.nameInput.onChange('Guest User');
      }
    }
  }
  handleToggleModal() {
    const {
      actions,
      isAddingFeedback,
    } = this.props;
    if (isAddingFeedback) {
      document.getElementById('app').classList.remove('no-scroll');
      this.handleClear();
    } else {
      document.getElementById('app').classList.add('no-scroll');
    }
    actions.toggleFeedbackModal();
  }
  handleSubmitFeedback() {
    const {
      user,
      actions,
      fields,
      authToken,
    } = this.props;
    if(user) {
      const data = {
        variables: {
          auth_token: authToken,
          feedback: {
            description: fields.descriptionInput.value,
            url: fields.urlInput.value,
          },
        },
      };
      actions.feedbackSubmissionInitiation();
      setTimeout(() => {
        this.props.submitFeedbackMutation(data)
          .then(() => {
            const message = 'Thank You for submitting feedback!' +
            '  We appreciate it greatly as it will help us to make this site better.';
            actions.feedbackSubmissionMessage(message);
          })
          .catch(err => {
            actions.feedbackSubmissionError(err);
          });
      }, 1000);
    } else {
      this.context.router.push('/login');
    }
  }
  handleClear() {
    const {
      resetForm,
    } = this.props;
    resetForm();
  }
  render() {
    const {
      user,
      location,
      isAddingFeedback,
      isSubmitting,
      hasFab,
      fields,
      resetForm,
      message,
    } = this.props;
    return (
      <div className={styles.addReview}>
        {isAddingFeedback &&
          <Layer
            onClose={this.handleToggleModal}
            a11yTitle={'Add Feedback'}
            closer
            align="right"
          >
            {isSubmitting &&
              <LoadingIndicator
                message="Submitting..."
                isLoading={isSubmitting}
              />
            }
            <Section role="dialog">
              <Box pad={{ vertical: 'large', horizontal: 'small' }}>
                <AddFeedbackForm
                  {...fields}
                  user={user}
                  isSubmitting={isSubmitting}
                  message={message}
                  location={location}
                  onSubmitFeedback={this.handleSubmitFeedback}
                  onClear={resetForm}
                />
              </Box>
            </Section>
          </Layer>
        }
        {hasFab &&
          <FeedbackButton onClick={this.handleToggleModal}/>
        }
      </div>
    );
  }
}

FeedbackContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  isAddingFeedback: PropTypes.bool.isRequired,
  onSubmitFeedback: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired,
  hasFab: PropTypes.bool.isRequired,
  submitFeedbackMutation: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  message: PropTypes.string,
  authToken: PropTypes.string,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isAddingFeedback: state.feedbackContainer.isAddingFeedback,
  isSubmitting: state.feedbackContainer.isSubmitting,
  message: state.feedbackContainer.message,
  user: state.app.user,
  authToken: state.app.authToken,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    FeedbackActionCreators,
    dispatch
  ),
});

const Container = reduxForm({
  form: 'addFeedback',
  fields: addFeedbackFields,
  validate: validation,
})(FeedbackContainer);

const createFeedbackMutation = gql`
  mutation createFeedback($feedback: FeedbackInput, $auth_token: String!){
  CreateFeedback(input:{feedback: $feedback, auth_token: $auth_token}){
    __typename
   }
  }
`;

const ContainerWithMutation = graphql(createFeedbackMutation, {
  props: ({ mutate }) => ({
    submitFeedbackMutation: mutate,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
