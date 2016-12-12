import React, { Component, PropTypes } from 'react';
import Form from 'grommet/components/form';
import FormField from 'grommet/components/formfield';
import FormFields from 'grommet/components/formfields';
import Footer from 'grommet/components/footer';
import Button from 'grommet/components/button';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Menu from 'grommet/components/menu';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

const itemInvalid = (item) =>
  item.touched && item.error;

const ROOT_URL = 'https://udacity-client.herokuapp.com';

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
      urlInput,
    } = this.props;
    return itemInvalid(nameInput) ||
      itemInvalid(descriptionInput) ||
      itemInvalid(urlInput);
  }
  handleSubmitFeedback() {
    const {
      nameInput,
      urlInput,
      descriptionInput,
    } = this.props;
    const feedback = {
      name: nameInput.value,
      url: urlInput.value,
      description: descriptionInput.value,
    };
    onSubmitFeedback(feedback);
  }
  render() {
    const {
      nameInput,
      urlInput,
      descriptionInput,
      onSubmitFeedback,
      onClear,
      user,
      location,
    } = this.props;
    return (
      <div>
      <Headline
        size="small"
        strong
      >
        We, Thank You For Your Feedback!
      </Headline>
      <Heading
        tag="h4"
        align="center"
      >
        Please Fill Out The Form Below...
      </Heading>
      <Form onSubmit={onSubmitFeedback}>
        <FormFields>
          <FormField
            label="Name *"
            htmlFor="feedbackNameInput"
            help="Please make sure your name is correct or Edit your profile to correct it!"
            error={nameInput.touched && nameInput.error ? nameInput.error : null}
          >
            <input
              {...nameInput}
              ref="nameInput"
              className={styles.blockedInput}
              id="feedbackNameInput"
              type="text"
              value={user ? user.name : 'Please Login To Submit a Feedback!'}
              name="name"
              disabled
              required
            />
          </FormField>
          <FormField
            label="URL *"
            htmlFor="feedbackUrlnput"
            help="Fill in the URL you want to give feedback about"
            error={urlInput.touched && urlInput.error ? urlInput.error : null}
          >
            <input
              {...urlInput}
              ref="urlInput"
              className={styles.longUrl}
              id="feedbackUrlnput"
              type="text"
              value={`${ROOT_URL}${location.pathname}`}
              name="url"
              disabled
              required
            />
          </FormField>
          <FormField
            label="Description"
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
      </div>
    );
  }
}

AddFeedbackForm.propTypes = {
  nameInput: PropTypes.object.isRequired,
  descriptionInput: PropTypes.object.isRequired,
  urlInput: PropTypes.object.isRequired,
  onSubmitFeedback: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default cssModules(AddFeedbackForm, styles);
