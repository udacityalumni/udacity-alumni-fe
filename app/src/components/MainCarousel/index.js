import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Carousel from 'grommet-udacity/components/Carousel';
import Box from 'grommet-udacity/components/Box';
import Animate from 'grommet-udacity/components/Animate';

class MainCarousel extends Component {  // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      images,
    } = this.props;
    return (
      <Box className={styles.carouselBox}>
        <Animate
          visible={images && images.length > 0}
          enter={{ animation: 'fade', duration: 2500 }}
          keep
        >
          <Carousel>
            {images && images.map((item, i) =>
              <img
                style={{ maxWidth: '100vw', maxHeight: 300, minWidth: 850, width: 'auto' }}
                key={i}
                src={item.url}
              />
            )}
          </Carousel>
        </Animate>
      </Box>
    );
  }
}

MainCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default cssModules(MainCarousel, styles);
