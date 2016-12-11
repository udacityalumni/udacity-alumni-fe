import styled from 'styled-components';
import GrommetTableRow from 'grommet-udacity/components/TableRow';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';

export const TableRow = styled(GrommetTableRow)`
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  border-bottom: 1px solid #eee;
`;

export const ArticleHeadingWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ArticleHeading = styled(Heading)`
  margin-top: 30px;
`;
