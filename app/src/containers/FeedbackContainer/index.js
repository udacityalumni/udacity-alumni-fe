import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FeedbackActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { FeedbackButton } from 'components';

class FeedbackContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { actions } = this.props
    return (
      <div className={styles.feedback}>
        <FeedbackButton onClick={actions.openFbModal} />
      </div>
    );
  }
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  modalOpen: state.FeedbackContainer.openFbModal,
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
