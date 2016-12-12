import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FeedbackActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import {
  FeedbackButton,
  AddFeedbackForm,
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
  'descriptionInput',
];

class FeedbackContainer extends Component {
  constructor() {
    super();
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleSubmitFeedback = this.handleSubmitFeedback.bind(this);
    this.handleClear = this.handleClear.bind(this);
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
  handleSubmitFeedback(feedback) {
    const {
      onSubmitFeedback,
    } = this.props;
    onSubmitFeedback(feedback);
    this.handleToggleModal();
  }
  handleClear() {
    const {
      resetForm,
    } = this.props;
    resetForm();
  }
  render() {
    const {
      isAddingFeedback,
      hasFab,
      fields,
      resetForm,
    } = this.props;
    return (
      <div className={styles.addReview}>
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
  isAddingFeedback: PropTypes.bool.isRequired,
  onSubmitFeedback: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired,
  hasFab: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isAddingFeedback: state.feedbackContainer.isAddingFeedback,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    FeedbackActionCreators,
    dispatch
  ),
});

const Container = cssModules(FeedbackContainer, styles);

const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default reduxForm({
  form: 'addFeedback',
  fields: addFeedbackFields,
  validate: validation,
})(ConnectedContainer);
