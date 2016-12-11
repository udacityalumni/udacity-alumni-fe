import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FeedbackActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { FeedbackButton } from 'components';

class FeedbackContainer extends Component {
  render() {
    const { actions } = this.props;
    return (
      <div className={styles.feedback}>
        <FeedbackButton onClick={actions.feedbackModalOpen} />
      </div>
    );
  }
}

FeedbackContainer.propTypes = {
  actions: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  feedbackModalOpen: state.feedbackContainer.feedbackModalOpen,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    FeedbackActionCreators,
    dispatch
  ),
});

const Container = cssModules(FeedbackContainer, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
