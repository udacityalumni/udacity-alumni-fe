import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Carousel from 'grommet-udacity/components/Carousel';
import Box from 'grommet-udacity/components/Box';

class MainCarousel extends Component {
  render() {
    const {
      images,
    } = this.props;
    return (
      <Box className={styles.carouselBox}>
        <Carousel>
          {images && images.map((item, i) =>
            <img
              style={{ maxWidth: '100vw', maxHeight: 300, minWidth: 850, width: 'auto' }}
              key={i}
              src={item.url}
            />
          )}
        </Carousel>
      </Box>
    );
  }
}

MainCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default cssModules(MainCarousel, styles);
