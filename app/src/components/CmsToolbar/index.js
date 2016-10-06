import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Columns from 'grommet-udacity/components/Columns';
import Box from 'grommet-udacity/components/Box';
import CheckBox from 'grommet-udacity/components/CheckBox';
import Select from 'grommet-udacity/components/Select';
import Button from 'grommet-udacity/components/Button';

const selectOptions = [
  { label: 'Draft', value: 0 },
  { label: 'Published', value: 1 },
  { label: 'Archived', value: 2 },
];

const CmsToolbar = ({
  spotlighted,
  onToggleSpotlight,
  onSetStatus,
  status,
  onSave,
}) => (
  <Box
    align="center"
    justify="center"
    full="horizontal"
    className={styles.toolbar}
  >
    <Columns justify="center" full="horizontal">
      <Box
        direction="row"
        full="horizontal"
        justify="between"
        align="center"
        pad="medium"
        margin="small"
        colorIndex="light-2"
      >
        <CheckBox
          toggle
          id="spotlight-toggle"
          name="spotlight"
          label="Spotlight"
          onChange={onToggleSpotlight}
          checked={spotlighted}
        />
        <Box flex="grow">
          <Button label="Save" onClick={() => onSave()} />
        </Box>
        <Select
          label="Status"
          value={selectOptions[status] ?
            selectOptions[status].label : 'Draft'
          }
          onChange={({ _, option }) => onSetStatus(option)} // eslint-disable-line
          options={selectOptions}
        />
      </Box>
    </Columns>
  </Box>
);

CmsToolbar.propTypes = {
  spotlighted: PropTypes.bool.isRequired,
  onToggleSpotlight: PropTypes.func.isRequired,
  onSetStatus: PropTypes.func.isRequired,
  status: PropTypes.oneOf([0, 1, 2]),
};

CmsToolbar.defaultProps = {
  status: 0,
  spotlighted: false,
};

export default cssModules(CmsToolbar, styles);
