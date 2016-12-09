import styled from 'styled-components';

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

export const AvatarImage = styled.img`
  width: ${props => sizeMap(props.size)}px;
  height: ${props => sizeMap(props.size)}px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: ${props => props.size !== 'xsmall' ? '4px' : '1px'};
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
`;
