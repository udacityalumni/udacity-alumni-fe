import styled from 'styled-components';
import Image from 'grommet-udacity/components/Image';
import Box from 'grommet-udacity/components/Box';

const sizeMap = (size) => {
  switch(size) {
    case 'xsmall':
      return 50;
    case 'small':
      return 100;
    case 'medium':
      return 150;
    case 'large':
      return 200;
    case 'xlarge':
      return 300;
    default:
      return 100;
  }
};

export const Wrapper = styled(Box)`
  width: ${props => sizeMap(props.imageSize)}px;
`;

export const ThumbnailImage = styled(Image)`
  border: solid 4px #FFFFFF;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  display: inline-block;
  line-height: 0;
  max-width: 100%;
  height: auto;
  transition: all 200ms ease-out;
`;
