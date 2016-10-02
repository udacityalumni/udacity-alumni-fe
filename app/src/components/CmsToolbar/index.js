import React, { PropTypes } from 'react';
import Columns from 'grommet-udacity/components/Columns';
import Box from 'grommet-udacity/components/Box';
import CheckBox from 'grommet-udacity/components/CheckBox';
import Select from 'grommet-udacity/components/Select';

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
}) => (
  <Box
    align="center"
    justify="center"
    full="horizontal"
    pad={{ horizontal: 'medium', vertical: 'medium' }}
  >
    <Columns justify="center">
      <Box
        direction="row"
        size="large"
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

export default CmsToolbar;
