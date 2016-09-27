import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Carousel from 'grommet/components/Carousel';
import Box from 'grommet/components/Box';

const MainCarousel = ({
  images,
}) => (
  <Box className={styles.carouselBox}>
    <Carousel>
      {images.map((item, i) =>
        <img key={i} src={item.src} />
      )}
    </Carousel>
  </Box>
);

MainCarousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default cssModules(MainCarousel, styles);
