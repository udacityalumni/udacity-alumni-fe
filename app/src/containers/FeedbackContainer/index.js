import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import * as FeedbackActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import {
  FeedbackButton,
  AddFeedbackForm,
  LoadingIndicator,
 } from 'components';
import validation from './validation/index';
import { reduxForm } from 'redux-form';
import Footer from 'grommet/components/footer';
import Layer from 'grommet/components/layer';
import Box from 'grommet/components/box';
import Button from 'grommet/components/button';
import Menu from 'grommet/components/menu';
import Section from 'grommet/components/Section';

export const addFeedbackFields = [
  'nameInput',
  'urlInput',
  'descriptionInput',
];
const ROOT_URL = 'https://udacity-client.herokuapp.com';

class FeedbackContainer extends Component {
  constructor() {
    super();
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleSubmitFeedback = this.handleSubmitFeedback.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  componentWillReceiveProps({ fields, user, location }) {
    if(location && !fields.urlInput.value) {
      fields.urlInput.onChange(`${ROOT_URL}${location.pathname}`);
    }
    if(location && !fields.nameInput.value) {
      if(user) {
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
      this.props.submitFeedbackMutation(data)
        .then(() => {
          const message = 'Thanks for submitting feedback!' +
          '  We appreciate it greatly as it will help us to make this site better.';
          actions.feedbackSubmissionMessage(message);
        })
        .catch(err => {
          actions.feedbackSubmissionError(err);
        });
    } else {
      this.context.router.push('/login');
    }
    // this.handleToggleModal();
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
        {isSubmitting &&
          <LoadingIndicator
            message="Submitting..."
            isLoading={isSubmitting}
          />
        }
        {isAddingFeedback ?
          <Layer
            onClose={this.handleToggleModal}
            a11yTitle={'Add Feedback'}
            closer
            align="right"
          >
            <Section role="dialog">
              <Box pad={{ vertical: 'large', horizontal: 'small' }}>
                <AddFeedbackForm
                  {...fields}
                  user={user}
                  message={message}
                  location={location}
                  onSubmitFeedback={this.handleSubmitFeedback}
                  onClear={resetForm}
                />
              </Box>
            </Section>
          </Layer>
        :
        <Footer className={styles.addFeedbackFooter}>
          <Menu direction="row">
            <Button
              className={styles.button}
              label="Add Feedback"
              primary
              onClick={this.handleToggleModal}
            />
          </Menu>
          {
            hasFab &&
              <FeedbackButton onClick={this.handleToggleModal}/>
          }
        </Footer>
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

// const StyledContainer = cssModules(FeedbackContainer, styles);

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
