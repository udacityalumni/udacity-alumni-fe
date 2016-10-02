import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Carousel from 'grommet/components/Carousel';
import Box from 'grommet/components/Box';

class MainCarousel extends Component {
  componentDidMount() {
     // HACK: call the resize event to make the carousel fit images
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }
  render() {
    const {
      images,
    } = this.props;
    return (
      <Box className={styles.carouselBox}>
        <Carousel>
          {images.map((item, i) =>
            <img key={i} src={item.src} />
          )}
        </Carousel>
      </Box>
    );
  }
}

MainCarousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default cssModules(MainCarousel, styles);
