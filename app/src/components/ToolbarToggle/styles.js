import styled from 'styled-components';
import Box from 'grommet-udacity/components/Box';
import ExpandIcon from 'grommet-udacity/components/icons/base/Expand';

export const FabIcon = styled(ExpandIcon)`
  font-size: 1.3rem;
  stroke: white !important;
`;

export const FabContainer = styled(Box)`
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: calc(50% - 40px);
`;

export const TrayMenu = styled(Box)`
  background-color: #f5f5f5;
  height: 40px;
  width: 80px;
`;
