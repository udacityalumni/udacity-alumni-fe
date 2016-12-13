import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Layer from 'grommet-udacity/components/Layer';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import CheckBox from 'grommet-udacity/components/CheckBox';
import Select from 'grommet-udacity/components/Select';
import Button from 'grommet-udacity/components/Button';
import Form from 'grommet-udacity/components/Form';
import FormField from 'grommet-udacity/components/FormField';
import FormFields from 'grommet-udacity/components/FormFields';
import Footer from 'grommet-udacity/components/Footer';
import { TagEditor } from 'components';

const selectOptions = [
  { label: 'Draft', value: 0 },
  { label: 'Published', value: 1 },
  { label: 'Archived', value: 2 },
];

const CmsModal = ({
  isShowing,
  onClose,
  spotlighted,
  onToggleSpotlight,
  onSetStatus,
  status,
  onSave,
  canSubmit,
  tags,
  onChangeValue,
  featureImage,
  onChangeFeatureImage,
  selectedTags,
}) => (
  <Layer
    hidden={!isShowing}
    onClose={onClose}
    closer
    align="center"
    className={styles.cmsModal}
  >
    <Box pad="medium">
      <Heading align="center">
        Article Settings
      </Heading>
    </Box>
    <Form
      pad="large"
    >
      <FormFields>
        <FormField
          label="Feature Image"
          help="Enter a URL to set the feature image of the article"
        >
          <input
            value={featureImage}
            placeholder="https://c2.staticflickr.com/8/7127/7552248154_978bcb1773.jpg"
            onChange={onChangeFeatureImage}
            type="text"
          />
        </FormField>
        <FormField
          label="Settings"
        >
          <CheckBox
            toggle
            id="spotlight-toggle"
            name="spotlight"
            label="Spotlight"
            onChange={onToggleSpotlight}
            checked={spotlighted}
          />
        </FormField>
        <FormField
          label="Status"
        >
          <Select
            label="Status"
            value={selectOptions[status] ?
              selectOptions[status].label : 'Draft'
            }
            onChange={({ _, option }) => onSetStatus(option)} // eslint-disable-line
            options={selectOptions}
          />
        </FormField>
        {tags && tags.length > 0 &&
          <FormField
            label="Tags"
            className={styles.formField}
          >
            <TagEditor
              onChangeValue={onChangeValue}
              selectedTags={selectedTags}
              tags={tags}
            />
          </FormField>
        }
        </FormFields>
      <Footer align="center" justify="center" pad="medium">
        <Button
          primary
          label="Save and Publish"
          onClick={canSubmit ? onSave : null}
        />
      </Footer>
    </Form>
  </Layer>
);

CmsModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  spotlighted: PropTypes.bool.isRequired,
  onToggleSpotlight: PropTypes.func.isRequired,
  onSetStatus: PropTypes.func.isRequired,
  status: PropTypes.oneOf([0, 1, 2]),
  onSave: PropTypes.func.isRequired,
  canSubmit: PropTypes.bool.isRequired,
  onCreateTag: PropTypes.func.isRequired,
  onChangeFeatureImage: PropTypes.func.isRequired,
  featureImage: PropTypes.string,
};

CmsModal.defaultProps = {
  isShowing: false,
  status: 0,
  spotlighted: false,
};

export default cssModules(CmsModal, styles);
