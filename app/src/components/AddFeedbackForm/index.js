import React, { Component, PropTypes } from 'react';
import Form from 'grommet-udacity/components/form';
import FormField from 'grommet-udacity/components/formfield';
import FormFields from 'grommet-udacity/components/formfields';
import Footer from 'grommet-udacity/components/footer';
import Button from 'grommet-udacity/components/button';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Menu from 'grommet-udacity/components/menu';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

const itemInvalid = (item) =>
  item.touched && item.error;

class AddFeedbackForm extends Component {
  constructor() {
    super();
    this.formIsInvalid = this.formIsInvalid.bind(this);
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
  render() {
    const {
      nameInput,
      urlInput,
      descriptionInput,
      onSubmitFeedback,
      isSubmitting,
      onClear,
      user,
      message,
    } = this.props;
    return (
      <div>
        {message &&
          <Heading
            tag="h4"
            align="center"
          >
            <Paragraph>
              {message}
            </Paragraph>
          </Heading>
        }
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
        <Form>
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
                name="name"
                className={styles.blockedInput}
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
                id="urlInput"
                type="text"
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
                    ?
                      descriptionInput.error
                    :
                      null
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
            {user ?
              <Menu direction="row">
                <Button
                  className={styles.button}
                  label="Submit"
                  primary
                  disabled={isSubmitting ? true : false}
                  onClick={onSubmitFeedback}
                />
                <Button
                  label="Clear"
                  onClick={onClear}
                />
              </Menu>
            :
              <Heading
                tag="h3"
              >
                Please Login to contiue giving us your feedback :)
              </Heading>
            }
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
  isSubmitting: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

export default cssModules(AddFeedbackForm, styles);
