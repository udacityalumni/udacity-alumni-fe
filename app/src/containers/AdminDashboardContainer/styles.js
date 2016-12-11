import styled from 'styled-components';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';

export const FullSection = styled(Section)`
  width: 100% !important;
  justify-content: space-around;
`;

export const MainContent = styled(Box)`
  position: relative;
  margin-bottom: 14px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(46,61,73,.2);
  border: 1px solid #dbe2e8;
  @media screen and (max-width: 768px) {
    max-width: 100vw;
    box-sizing: border-box;
  }
  padding: 60px 0;
`;

export const MainBox = styled(Box)`
  background-color: #fafbfc;
`;

export const AsideButtonContainer = styled(Box)`
  position: absolute;
  top: 10px;
  right: 10px;
  @media screen and (max-width: 1450px) {
    display: none !important;
  }
`;
