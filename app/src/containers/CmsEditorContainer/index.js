import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CmsEditorActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import { stateToMarkdown } from 'megadraft-js-export-markdown';
import { editorStateToJSON } from 'megadraft';
import { convertFromRaw } from 'draft-js';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import articleDataFragment from './graph/fragments';
import inputToArticle from './model/articleSubmission';
import {
  CmsEditor,
  ToastMessage,
  CmsModal,
  LoadingIndicator,
  CmsEditorPreview,
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
    this.handleClosePreview = this.handleClosePreview.bind(this);
    this.handlePreviewArticle = this.handlePreviewArticle.bind(this);
    this.handleLoadingArticle = this.handleLoadingArticle.bind(this);
    this.handleNewArticleSubmission = this.handleNewArticleSubmission.bind(this);
    this.handleUpdateArticleSubmission = this.handleUpdateArticleSubmission.bind(this);
  }
  componentDidMount() {
    const {
      location,
      actions,
    } = this.props;
    const {
      articleId,
      action,
    } = location.query;
    if (articleId && action) {
      actions.cmsSetArticleId(articleId, action);
    }
  }
  componentWillReceiveProps({ message, articleId, article }) {
    if (message) {
      const {
        router,
      } = this.context;
      setTimeout(() => {
        const path = '/admin/content-dashboard';
        this.context.router.push(path);
        router.push(path);
      }, 3000);
    }
    if (articleId && !article) {
      this.handleLoadingArticle();
    }
    if (article && !this.props.article) {
      this.props.actions.cmsSetStateFromArticle(article);
    }
  }
  handleLoadingArticle() {
    const {
      refetchArticle,
    } = this.props;
    if (typeof refetchArticle === 'function') {
      refetchArticle();
    }
  }
  handleSubmit() {
    const {
      action,
      editorTitle,
      editorState,
      modal,
    } = this.props;
    const json = editorStateToJSON(editorState);
    const blockArray = convertFromRaw(JSON.parse(json));
    const content = stateToMarkdown(blockArray);
    const article = inputToArticle({
      json,
      content,
      title: editorTitle,
      status: modal.status,
      spotlighted: modal.spotlighted,
      tags: modal.selectedTags,
      feature_image: modal.featureImage || '',
    });
    if (action && action === 'edit') {
      this.handleUpdateArticleSubmission(article);
    } else {
      this.handleNewArticleSubmission(article);
    }
  }
  handleNewArticleSubmission(article) {
    const {
      actions,
      authToken,
      createArticleMutation,
    } = this.props;
    actions.submitArticleInitiation();
    createArticleMutation({
      variables: {
        authToken,
        article,
      },
    }).then(() => {
      actions.submitArticleSucces('Successfully created the article.');
    }).catch(err => {
      actions.submitArticleFailure(err);
    });
  }
  handleUpdateArticleSubmission(article) {
    const {
      updateArticleMutation,
      articleId,
      authToken,
      actions,
    } = this.props;
    actions.submitArticleInitiation();
    updateArticleMutation({
      variables: {
        authToken,
        id: articleId,
        article,
      },
    }).then(() => {
      actions.submitArticleSucces('Successfully updated the article.');
    }).catch(err => {
      actions.submitArticleFailure(err);
    });
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
    this.props.actions.cmsCloseModal();
    this.props.actions.cmsSetStateFromArticle(this.props.article);
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
    cmsSetEditorState(state);
  }
  handleEditorSetTitle({ target }) {
    const {
      cmsSetEditorTitle,
    } = this.props.actions;
    cmsSetEditorTitle(target.value);
  }
  handlePreviewArticle() {
    const {
      editorState,
      editorTitle,
      actions,
    } = this.props;
    const rawState = editorStateToJSON(editorState);
    const blockArray = convertFromRaw(JSON.parse(rawState));
    const markdown = stateToMarkdown(blockArray);
    actions.cmsSetPreviewState({ markdown, title: editorTitle });
  }
  handleClosePreview() {
    const {
      cmsClosePreview,
    } = this.props.actions;
    cmsClosePreview();
  }
  render() {
    const {
      submissionError,
      message,
      modal,
      tags,
      loadingTags,
      articleLoading,
      editorState,
      editorTitle,
      isValid,
      preview,
      isLoading,
      actions,
      action,
    } = this.props;
    const loading = loadingTags || articleLoading || isLoading;
    return (
      <div className={styles.cmsEditor}>
        {submissionError &&
          <ToastMessage
            message={submissionError.message}
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
        {loading ?
          <Section
            align="center"
            justify="center"
            className="loading__box"
          >
            <LoadingIndicator isLoading />
          </Section>
        :
          <CmsEditor
            onSubmit={this.handleOpenModal}
            onChangeContent={this.handleEditorSetContent}
            onChangeTitle={this.handleEditorSetTitle}
            editorState={editorState}
            editorTitle={editorTitle}
            isValid={isValid}
            isEditing={action ? action === 'edit' : false}
            onTapToPreview={this.handlePreviewArticle}
          />
        }
        <CmsModal
          isShowing={modal.isShowing}
          onClose={this.handleCloseModal}
          spotlighted={modal.spotlighted}
          onToggleSpotlight={this.handleToggleSpotlight}
          onSetStatus={this.handleSetStatus}
          status={modal.status}
          onSave={this.handleSubmit}
          canSubmit={isValid}
          tags={tags}
          selectedTags={modal.selectedTags}
          onChangeValue={this.handleChangeSelectedTags}
          featureImage={modal.featureImage}
          onChangeFeatureImage={({ target }) => actions.setFeatureImage(target.value)}
        />
        <CmsEditorPreview
          isShowing={preview.isPreviewing}
          onClose={this.handleClosePreview}
          content={preview.content}
          title={preview.title}
        />
      </div>
    );
  }
}

CmsEditorContainer.propTypes = {
  updateArticleMutation: PropTypes.func.isRequired,
  articleId: PropTypes.number,
  action: PropTypes.string,
  actions: PropTypes.object.isRequired,
  submissionError: PropTypes.object,
  message: PropTypes.string,
  modal: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
  loadingTags: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  authToken: PropTypes.string.isRequired,
  refetch: PropTypes.func.isRequired,
  editorState: PropTypes.object,
  editorTitle: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
  preview: PropTypes.object.isRequired,
  params: PropTypes.object,
  location: PropTypes.object.isRequired,
  article: PropTypes.object,
  articleLoading: PropTypes.bool.isRequired,
  refetchArticle: PropTypes.func.isRequired,
  createArticleMutation: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

CmsEditorContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  submissionError: state.cmsEditorContainer.error,
  message: state.cmsEditorContainer.message,
  modal: state.cmsEditorContainer.modal,
  editorState: state.cmsEditorContainer.editorState,
  editorTitle: state.cmsEditorContainer.editorTitle,
  isValid: state.cmsEditorContainer.isValid,
  preview: state.cmsEditorContainer.preview,
  articleId: state.cmsEditorContainer.article.id,
  action: state.cmsEditorContainer.article.action,
  user: state.app.user,
  authToken: state.app.authToken,
  isLoading: state.cmsEditorContainer.isLoading,
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
  props: ({ data: { tags, loading } }) => ({
    loadingTags: loading,
    tags,
  }),
})(Container);

const loadArticleQuery = gql`
  query getArticle($id: ID) {
    article(id: $id) {
      ...articleDataFragment
    }
  }
`;

const ContainerWithArticle = graphql(loadArticleQuery, {
  options: (ownProps) => ({
    skip: !ownProps.articleId,
    variables: {
      id: parseInt(ownProps.articleId, 10),
    },
    fragments: [articleDataFragment],
  }),
  props: ({ data: { article, loading, refetch } }) => ({
    articleLoading: loading,
    article,
    refetchArticle: refetch,
  }),
})(ContainerWithTags);

const updateArticleMutation = gql`
mutation updateArticleMutation($id: ID!,
  $authToken: String!, $article: ArticleInput) {
    UpdateArticle(input: { id: $id, auth_token: $authToken, article: $article }) {
      article {
        ...articleDataFragment
      }
    }
  }
`;

const ContainerWithMutations = graphql(updateArticleMutation, {
  options: () => ({
    fragments: [articleDataFragment],
  }),
  props: ({ mutate }) => ({
    updateArticleMutation: mutate,
  }),
})(ContainerWithArticle);

const createArticleMutation = gql`
  mutation createArticleMutation($authToken: String!, $article: ArticleInput) {
    CreateArticle(input: { auth_token: $authToken, article: $article }) {
      article {
        ...articleDataFragment
      }
    }
  }
`;

const ContainerWithMoreMutations = graphql(createArticleMutation, {
  options: () => ({
    fragments: [articleDataFragment],
  }),
  props: ({ mutate }) => ({
    createArticleMutation: mutate,
  }),
})(ContainerWithMutations);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMoreMutations);
