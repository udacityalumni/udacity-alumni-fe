import React, { PropTypes } from 'react';
import Button from 'grommet-udacity/components/Button';
import { FabContainer, FabIcon, TrayMenu } from './styles';

const ToolbarToggle = ({
  onClick,
}) => (
  <FabContainer>
    <TrayMenu>
      <Button
        onClick={onClick}
        icon={<FabIcon />}
        plain
      />
    </TrayMenu>
  </FabContainer>
);

ToolbarToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ToolbarToggle;
