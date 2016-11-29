import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Spinning from 'grommet-udacity/components/icons/Spinning';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import messageData from './data/messageData';
import { getRandomMessage } from './utils';

const LoadingIndicator = ({
  isLoading,
  message,
}) => (
  <Box
    align="center"
    justify="center"
    className={styles.loadingIndicator}
  >
    {isLoading &&
      <Box
        align="center"
        justify="center"
      >
        <Spinning />
        <Heading
          tag="h3"
          align="center"
          style={{ maxWidth: 200 }}
        >
          {message}
        </Heading>
      </Box>
    }
  </Box>
);

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

LoadingIndicator.defaultProps = {
  isLoading: true,
  message: getRandomMessage(messageData),
};

export default cssModules(LoadingIndicator, styles);
