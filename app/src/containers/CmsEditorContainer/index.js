import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CmsEditorActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { CmsEditor, ToastMessage, CmsModal } from 'components';

class CmsEditorContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseToast = this.handleCloseToast.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }
  handleSubmit(data) {
    const {
      submitArticleRequest,
    } = this.props.actions;
    submitArticleRequest(data);
    const path = '/admin/content-dashboard';
    this.context.router.push(path);
    const {
      router,
    } = this.context;
    router.push(path);
  }
  handleCloseToast({ type }) {
    const {
      handleClearingToast,
    } = this.props.actions;
    handleClearingToast(type);
  }
  handleOpenModal() {
    const {
      cmsOpenModal,
    } = this.props.actions;
    cmsOpenModal();
  }
  handleCloseModal() {
    const {
      cmsCloseModal,
    } = this.props.actions;
    cmsCloseModal();
  }
  handleSetStatus(status) {
    const {
      cmsSetStatus,
    } = this.props.actions;
    cmsSetStatus(status);
  }
  render() {
    const {
      error,
      message,
      modal,
    } = this.props;
    return (
      <div className={styles.cmsEditor}>
        {error &&
          <ToastMessage
            message={error.message ? error.message : error}
            onClose={() => this.handleCloseToast({ type: 'error' })}
            status="critical"
          />
        }
        {message &&
          <ToastMessage
            message={message}
            onClose={() => this.handleCloseToast({ type: 'message' })}
          />
        }
        <CmsEditor
          onSubmit={this.handleOpenModal}
        />
        <CmsModal
          isShowing={modal.isShowing}
          onClose={this.handleCloseModal}
          spotlighted={modal.spotlighted}
          onToggleSpotlight={this.handleToggleSpotlight}
          onSetStatus={this.handleSetStatus}
          status={modal.status}
          onSave={this.handleSubmit}
          canSubmit={modal.canSubmit}
        />
      </div>
    );
  }
}

CmsEditorContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  error: PropTypes.object,
  message: PropTypes.string,
  modal: PropTypes.object.isRequired,
};

CmsEditorContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  error: state.cmsEditorContainer.error,
  message: state.cmsEditorContainer.message,
  isSubmitting: state.cmsEditorContainer.isSubmitting,
  modal: state.cmsEditorContainer.modal,
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
