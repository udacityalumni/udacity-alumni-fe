import React, { PropTypes } from 'react';
import { AvatarImage } from './styles';
const defaultAvatarUrl = 'https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/no-user.png?raw=true';

const Avatar = ({
  src,
}) => (
  <AvatarImage
    src={src || defaultAvatarUrl}
  />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  src: defaultAvatarUrl,
};

export default Avatar;
