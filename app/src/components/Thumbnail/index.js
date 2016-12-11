import React, { PropTypes } from 'react';
import { ThumbnailImage, Wrapper } from './styles';
const defaultAvatarUrl = 'https://github.com/RyanCCollins/cdn/blob/master/misc/placeholder3.png?raw=true';

const Thumbnail = ({
  src,
  size,
}) => (
  <Wrapper imageSize={size}>
    <ThumbnailImage
      src={src || defaultAvatarUrl}
    />
  </Wrapper>
);

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
  ]),
};

Thumbnail.defaultProps = {
  src: defaultAvatarUrl,
  size: 'small',
};

export default Thumbnail;
