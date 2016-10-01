import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CmsEditorActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { CmsEditor } from 'components';

class CmsEditorContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(data) {
    const {
      submitArticleRequest,
    } = this.props.actions;
    submitArticleRequest(data);
  }
  render() {
    return (
      <div className={styles.cmsEditor}>
        <CmsEditor onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

CmsEditorContainer.propTypes = {
  actions: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  errors: state.cmsEditor.errors,
  message: state.cmsEditor.message,
  isSubmitting: state.cmsEditor.isSubmitting,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    CmsEditorActionCreators,
    dispatch
  ),
});

const Container = cssModules(CmsEditorContainer, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
