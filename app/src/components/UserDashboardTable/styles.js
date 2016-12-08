import styled from 'styled-components';
import Box from 'grommet-udacity/components/Box';
import Footer from 'grommet-udacity/components/Footer';

export const BoxWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row !important;
`;

export const InnerWrapper = styled(Box)`
  width: 80vw;
  justify-content: center;
`;

export const ListWrapper = styled(Box)`
  min-height: 600px;
  min-width: 600px;
  border: 1px solid #e2e2e2;
  max-width: 100vw !important;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    border: none;
  }
`;

export const GrowBox = styled(Box)`
  flex-grow: 1;
`;
