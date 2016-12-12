import styled from 'styled-components';
import Button from 'grommet-udacity/components/Button';
import Box from 'grommet-udacity/components/Box';
import LinkPrevious from 'grommet-udacity/components/icons/base/LinkPrevious';

export const FabButton = styled(Button)`
  stroke: white !important;
`;

export const FabIcon = styled(LinkPrevious)`
  font-size: 1.6rem;
  stroke: white !important;
`;

export const FabContainer = styled(Box)`
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  margin: 1.5em;
  @media screen and (max-width: 768px) {
    margin: 1em;
  }
`;

export const Fab = styled(Box)`
  background-color: #89A2B5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  title {
    color: black !important;
  }
  @media screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;
