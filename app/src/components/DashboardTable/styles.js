import styled from 'styled-components';
import GrommetTableRow from 'grommet-udacity/components/TableRow';

export const TableRow = styled(GrommetTableRow)`
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  border-bottom: 1px solid #eee;
`;
