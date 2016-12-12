import React, { Component, PropTypes } from 'react';
import Form from 'grommet/components/form';
import FormField from 'grommet/components/formfield';
import FormFields from 'grommet/components/formfields';
import Footer from 'grommet/components/footer';
import Button from 'grommet/components/button';
import Menu from 'grommet/components/menu';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

const itemInvalid = (item) =>
  item.touched && item.error;

class AddFeedbackForm extends Component {
  constructor() {
    super();
    this.formIsInvalid = this.formIsInvalid.bind(this);
    this.handleSubmitFeedback = this.handleSubmitFeedback.bind(this);
  }
  formIsInvalid() {
    const {
      nameInput,
      descriptionInput,
    } = this.props;
    return itemInvalid(nameInput) ||
      itemInvalid(descriptionInput);
  }
  handleSubmitFeedback() {
    const {
      nameInput,
      descriptionInput,
    } = this.props;
    const feedback = {
      name: nameInput.value,
      description: descriptionInput.value,
    };
    onSubmitFeedback(feedback);
  }
  render() {
    const {
      nameInput,
      descriptionInput,
      onSubmitFeedback,
      onClear,
    } = this.props;
    return (
      <Form onSubmit={onSubmitFeedback}>
        <FormFields>
          <FormField
            label="Your Name *"
            htmlFor="feedbackNameInput"
            help="What is your name ?"
            error={nameInput.touched && nameInput.error ? nameInput.error : null}
          >
            <input
              {...nameInput}
              ref="nameInput"
              id="feedbackNameInput"
              type="text"
              name="name"
              required
            />
          </FormField>
          <FormField
            label="Feedback Description"
            htmlFor="feedbackDescriptionInput"
            help="Describe your problem/feedback"
            error={descriptionInput.touched && descriptionInput.error
               ? descriptionInput.error : null
            }
          >
            <textarea
              {...descriptionInput}
              id="feedbackDescriptionInput"
              ref="feedbackDescriptionInput"
              type="text"
              rows="5"
              cols="40"
              required
            />
          </FormField>
        </FormFields>
        <Footer className={styles.footer}>
          <Menu direction="row">
            <Button
              className={styles.button}
              label="Submit"
              primary
              disabled={this.formIsInvalid()}
              onClick={this.formIsInvalid() ? null : this.handleSubmitFeedback}
            />
            <Button
              label="Clear"
              onClick={onClear}
            />
          </Menu>
        </Footer>
      </Form>
    );
  }
}

AddFeedbackForm.propTypes = {
  nameInput: PropTypes.object.isRequired,
  descriptionInput: PropTypes.object.isRequired,
  onSubmitFeedback: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default cssModules(AddFeedbackForm, styles);
