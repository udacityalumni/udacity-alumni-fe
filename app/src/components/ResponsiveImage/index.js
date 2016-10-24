import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Animate from 'grommet-udacity/components/Animate';
import MissingVisual from './missing-visual.png';

class ResponsiveImage extends Component {
  constructor() {
    super();
    this.setImageLoadedState = this.setImageLoadedState.bind(this);
    this.state = {
      isLoaded: false,
    };
  }
  setImageLoadedState() {
    this.setState({
      isLoaded: true,
    });
  }
  render() {
    const {
      src,
      matchHeight,
    } = this.props;
    return (
      <Animate
        visible={this.state.isLoaded}
        enter={{ animation: 'fade', duration: 1000 }}
        keep
      >
        <div
          className={matchHeight ? styles.responsiveImageMatchHeight : styles.responsiveImage}
        >
          <img
            onLoad={this.setImageLoadedState}
            src={src || MissingVisual}
          />
        </div>
      </Animate>
    );
  }
}

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  matchHeight: PropTypes.bool.isRequired,
};

ResponsiveImage.defaultProps = {
  matchHeight: true,
};

export default cssModules(ResponsiveImage, styles);
