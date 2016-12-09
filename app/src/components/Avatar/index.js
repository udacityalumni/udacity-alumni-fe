import React, { PropTypes } from 'react';
import { AvatarImage } from './styles';
const defaultAvatarUrl = 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/no-user.png?raw=true';

const Avatar = ({
  src,
  size,
}) => (
  <AvatarImage
    size={size}
    src={src || defaultAvatarUrl}
  />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
  ]),
};

Avatar.defaultProps = {
  src: defaultAvatarUrl,
  size: 'small',
};

export default Avatar;
