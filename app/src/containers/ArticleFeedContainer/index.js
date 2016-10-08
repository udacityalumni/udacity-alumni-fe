import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ArticleFeedActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';

class ArticleFeed extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Section className={styles.articleFeed}>
        <Box>
          
        </Box>
      </Section>
    );
  }
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ArticleFeedActionCreators,
    dispatch
  ),
});

const Container = cssModules(ArticleFeed, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
