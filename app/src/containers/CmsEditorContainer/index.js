import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CmsEditorActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {
  CmsEditor,
  ToastMessage,
  CmsModal,
  LoadingIndicator,
} from 'components';

class CmsEditorContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseToast = this.handleCloseToast.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleChangeSelectedTags = this.handleChangeSelectedTags.bind(this);
    this.handleToggleSpotlight = this.handleToggleSpotlight.bind(this);
    this.handleSetStatus = this.handleSetStatus.bind(this);
    this.handleEditorSetContent = this.handleEditorSetContent.bind(this);
    this.handleEditorSetTitle = this.handleEditorSetTitle.bind(this);
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
    cmsSetStatus(status.value);
  }
  handleChangeSelectedTags(tags) {
    const {
      cmsSetSelectedTags,
    } = this.props.actions;
    cmsSetSelectedTags(tags);
  }
  handleToggleSpotlight() {
    const {
      cmsToggleSpotlight,
    } = this.props.actions;
    cmsToggleSpotlight();
  }
  handleEditorSetContent(state) {
    const {
      cmsSetEditorState,
    } = this.props.actions;
    console.log(`Setting editor state ${JSON.stringify(state)}`);
    cmsSetEditorState(state);
  }
  handleEditorSetTitle({ target }) {
    const {
      cmsSetEditorTitle,
    } = this.props.actions;
    cmsSetEditorTitle(target.value);
  }
  render() {
    const {
      error,
      message,
      modal,
      tags,
      loading,
      editorState,
      editorTitle,
      isValid,
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
        {loading &&
          <LoadingIndicator isLoading />
        }
        <CmsEditor
          onSubmit={this.handleOpenModal}
          onChangeContent={this.handleEditorSetContent}
          onChangeTitle={this.handleEditorSetTitle}
          editorState={editorState}
          editorTitle={editorTitle}
          isValid={isValid}
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
          tags={tags}
          selectedTags={modal.selectedTags}
          onChangeValue={this.handleChangeSelectedTags}
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
  tags: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired,
  editorState: PropTypes.object,
  editorTitle: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
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
  editorState: state.cmsEditorContainer.editorState,
  editorTitle: state.cmsEditorContainer.editorTitle,
  isValid: state.cmsEditorContainer.isValid,
  user: state.app.user,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    CmsEditorActionCreators,
    dispatch
  ),
});

const Container = cssModules(CmsEditorContainer, styles);

const loadTagsQuery = gql`
  query loadPastTags {
    tags {
      id
      slug
      tag
    }
  }
`;

const ContainerWithTags = graphql(loadTagsQuery, {
  props: ({ data: { tags, loading, refetch } }) => ({
    loading,
    tags,
    refetch,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithTags);
