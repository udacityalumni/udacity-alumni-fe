import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { EditableText } from 'components';
import Section from 'grommet-udacity/components/Section';
import Article from 'grommet-udacity/components/Article';
import Heading from 'grommet-udacity/components/Heading';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Button from 'grommet-udacity/components/Button';
import Footer from 'grommet-udacity/components/Footer';
import Menu from 'grommet-udacity/components/Menu';
import Box from 'grommet-udacity/components/Box';
import CheckmarkIcon from 'grommet-udacity/components/icons/base/Checkmark';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import CheckBox from 'grommet-udacity/components/CheckBox';
import FormField from 'grommet-udacity/components/FormField';

const UserProfile = ({
  user,
  onEditBio,
  isEditing,
  bioInput,
  onSaveEdit,
  onClickToEdit,
  onCancel,
  onEditAvatar,
  avatarInput,
  onEditEmail,
  onTogglePublic,
  emailInput,
  publicInput,
}) => (
  <Article className={styles.panel}>
    <Heading tag="h2" align="center">
      {`Hello, ${user.name}!`}
    </Heading>
    <Section
      className={isEditing ? '' : styles.transformAvatar}
      pad="none"
      align="center"
      justify="center"
    >
      <EditableText
        onClickToEdit={onClickToEdit}
        isEditing={isEditing}
        autoFocus
        onEdit={onEditAvatar}
        type="url"
        placeholder="http://github.com/avatar.png"
        value={avatarInput}
        name="photo"
        altName="avatar"
      >
        <img
          className={styles.avatar}
          src={user.avatar ?
            user.avatar
          :
            'http://bit.ly/2dqCGdd'
          }
        />
      </EditableText>
    </Section>
    <EditableText
      isEditing={isEditing}
      onClickToEdit={onClickToEdit}
      onEdit={onEditBio}
      placeholder="Hi, I'm Bill and I used to be the president."
      value={bioInput}
      name="bio"
    >
      <Box direction="row">
        <Paragraph className={`${styles.isButton} ${styles.paragraph}`}>
          {user.bio ? user.bio : 'Click to add a bio.'}
        </Paragraph>
      </Box>
    </EditableText>
    <EditableText
      isEditing={isEditing}
      onEdit={onEditEmail}
      type="email"
      onClickToEdit={onClickToEdit}
      placeholder="bill@clinton.com"
      value={emailInput}
      name="email"
    >
      <Box direction="row" justify="center" align="between">
        <Heading
          className={styles.isButton}
          tag="h3"
          align="center"
        >
          {user.email}
        </Heading>
      </Box>
    </EditableText>
    <Section align="center">
      <Box
        size="medium"
        onClick={isEditing ? null : onClickToEdit}
        focusable
      >
        <FormField>
          <CheckBox
            toggle
            onChange={onTogglePublic}
            disabled={!isEditing}
            checked={publicInput}
            value={publicInput}
            label="Public Profile"
          />
        </FormField>
      </Box>
    </Section>
    {isEditing &&
      <Footer align="center" justify="center">
        <Menu inline direction="row" responsive={false}>
          <Button
            label="Cancel"
            secondary
            style={{ marginTop: 10, marginRight: 5 }}
            onClick={onCancel}
            icon={<CloseIcon />}
          />
          <Button
            label="Save"
            primary
            style={{ marginTop: 10, marginLeft: 5 }}
            onClick={onSaveEdit}
            icon={<CheckmarkIcon />}
          />
        </Menu>
      </Footer>
    }
  </Article>
);

UserProfile.propTypes = {
  onEditEmail: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  emailInput: PropTypes.string.isRequired,
  onEditBio: PropTypes.func.isRequired,
  onSaveEdit: PropTypes.func.isRequired,
  onClickToEdit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onEditAvatar: PropTypes.func.isRequired,
  avatarInput: PropTypes.string,
  publicInput: PropTypes.bool.isRequired,
  onTogglePublic: PropTypes.func.isRequired,
};

export default cssModules(UserProfile, styles);
