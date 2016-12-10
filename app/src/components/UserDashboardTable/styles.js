import styled from 'styled-components';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import TableRow from 'grommet-udacity/components/TableRow';
import GrommetLabel from 'grommet-udacity/components/Label';
import GrommetSelect from 'grommet-udacity/components/Select';

export const BoxWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row !important;
  width: 100%;
  margin-top: 40px;
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
  @media screen and (max-width: 1200px) {
    flex-grow: 0;
    max-width: 100vw;
    box-sizing: border-box;
  }
`;

export const UserName = styled(Heading)`
  flex: 1;
`;

export const TD = styled.td`
  min-width: 220px;
  @media screen and (max-width: 1200px) {
    min-width: 100px;
  }
`;

export const TRow = styled(TableRow)`
  cursor: pointer;
  &:hover {
    background-color: ${props => props.isEditing ? '#fff' : '#eee'};
  }
  border-bottom: 1px solid #eee;
`;

export const Input = styled.input`
  display: flex;
  flex: 1;
  margin-left: 20px !important;
`;

export const TextArea = styled.textarea`
  display: flex;
  flex: 1;
  margin-left: 20px !important;
`;

export const Label = styled(GrommetLabel)`
  width: 50px;
  margin: 5px;
`;

export const SelectBig = styled(GrommetSelect)`
  display: flex;
  flex: 1;
  margin-left: 20px;
  input {
    display: flex;
    flex: 1;
  }
`;
