import React, { PropTypes } from 'react';
import { StyledWrapper } from './styles';
import Layer from 'grommet-udacity/components/Layer';
import Form from 'grommet-udacity/components/Form';
import FormField from 'grommet-udacity/components/FormField';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import Menu from 'grommet-udacity/components/Menu';
import CheckmarkIcon from 'grommet-udacity/components/icons/base/Checkmark';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import { Avatar } from 'components';

const AvatarFormModal = ({
  isVisible,
  onClose,
  onSave,
  onCancel,
  onChange,
  avatarString,
  user,
}) => (
  <Layer
    closer
    onClose={onClose}
    hidden={!isVisible}
    align="center"
  >
    <Box pad="large">
      <Box pad="medium">
        <Heading align="center" tag="h2">
          {`Edit Avatar for ${user ? user.name : ''}`}
        </Heading>
      </Box>
      <Box align="center" justify="center" pad="medium">
        <Avatar src={user ? user.avatar : null} />
      </Box>
      <Form>
        <FormField
          label="Avatar"
          help="Enter a URL to set this User's Avatar"
        >
          <input
            value={avatarString}
            onChange={onChange}
            placeholder="https://c2.staticflickr.com/8/7127/7552248154_978bcb1773.jpg"
            type="text"
          />
        </FormField>
      </Form>
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
            onClick={onSave}
            icon={<CheckmarkIcon />}
          />
        </Menu>
      </Footer>
    </Box>
  </Layer>
);

AvatarFormModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  avatarString: PropTypes.string,
  user: PropTypes.object,
};

export default AvatarFormModal;
