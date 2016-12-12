import styled from 'styled-components';
import GrommetTableRow from 'grommet-udacity/components/TableRow';
import Box from 'grommet-udacity/components/Box';

export const TableRow = styled(GrommetTableRow)`
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  border-bottom: 1px solid #eee;
`;

export const BoxWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row !important;
  width: 100%;
`;

export const InnerWrapper = styled(Box)`
  width: 80vw;
  justify-content: center;
`;

export const ListWrapper = styled(Box)`
  min-height: 600px;
  max-width: 100vw !important;
  box-sizing: border-box;
  padding: 40px 20px !important;
`;

export const FlexGrow = styled(Box)`
  flex-grow: 1;
  @media screen and (max-width: 1200px) {
    flex-grow: 0;
    max-width: 100vw;
    box-sizing: border-box;
  }
`;
