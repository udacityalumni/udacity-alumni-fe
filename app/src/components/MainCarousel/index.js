import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Carousel from 'grommet-udacity/components/Carousel';
import Box from 'grommet-udacity/components/Box';
import Animate from 'grommet-udacity/components/Animate';

class MainCarousel extends Component {
  constructor() {
    super();
    this.setNotLoading = this.setNotLoading.bind(this);
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
     // HACK: call the resize event to make the carousel fit images
    setTimeout(() => {
      if (this.state.isLoading) {
        this.setNotLoading();
      }
      window.dispatchEvent(new Event('resize'));
    }, 700);
  }
  setNotLoading() {
    this.setState({
      isLoading: false,
    });
  }
  render() {
    const {
      images,
    } = this.props;
    const {
      isLoading,
    } = this.state;
    return (
      <Box className={styles.carouselBox}>
        {images && images.length > 0 &&
          <Animate
            visible={!isLoading}
            enter={{ animation: 'fade', duration: 2500 }}
            keep
          >
            <Carousel>
              {images.map((item, i) =>
                <img
                  style={{ maxWidth: '100vw', maxHeight: 300, minWidth: 850, width: 'auto' }}
                  key={i}
                  src={item.url}
                />
              )}
            </Carousel>
          </Animate>
        }
      </Box>
    );
  }
}

MainCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default cssModules(MainCarousel, styles);
