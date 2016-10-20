import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ContentDashboardActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import {
  MainAside,
  DashboardTable,
  ConfirmationModal,
  LoadingIndicator,
  ToastMessage,
} from 'components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ContentDashboard extends Component {
  constructor() {
    super();
    this.handleDeletingArticle = this.handleDeletingArticle.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }
  componentDidMount() {
    this.props.actions.loadDashboardArticles();
  }
  componentWillReceiveProps({ message }) {
    // New message, so that means something was deleted
    // Refetch at this point.
    if (message && !this.props.message) {
      this.props.actions.loadDashboardArticles();
    }
  }
  handleOpenModal(id) {
    const {
      actions,
    } = this.props;
    actions.dashboardToggleModalToDelete(id);
  }
  handleDeletingArticle() {
    const {
      deleteArticleMutation,
      selectedArticleId,
      authToken,
      actions,
    } = this.props;
    const data = {
      variables: {
        id: selectedArticleId,
        authToken,
      },
    };
    actions.dashboardModalConfirmation();
    actions.dashboardDeleteArticleInitiation();
    deleteArticleMutation(data)
      .then(() => {
        actions.dashboardDeleteArticleSuccess(
          'The article was successfully deleted'
        );
      })
      .catch(err => {
        actions.dashboardDeleteArticleFailure(err);
      });
  }
  render() {
    const {
      user,
      articles,
      isShowingModal,
      actions,
      isLoading,
      message,
      errorMessage,
      isMobile,
    } = this.props;
    return (
      <div className={styles.contentDashboard}>
        {message &&
          <ToastMessage
            message={message}
            onClose={() => actions.handleClearingToast('message')}
          />
        }
        {errorMessage &&
          <ToastMessage
            message={errorMessage}
            status="critical"
            onClose={() => actions.handleClearingToast('error')}
          />
        }
        <ConfirmationModal
          isVisible={isShowingModal}
          onConfirm={() => this.handleDeletingArticle()}
          onCancel={() => actions.dashboardModalCancelation()}
          title="Confirm Deletion"
        />
        <Section
          alignContent="center"
          align="center"
        >
         {isLoading ?
           <Section
             align="center"
             justify="center"
             className="loading__box"
           >
             <LoadingIndicator isLoading />
           </Section>
          :
            <Box direction="row">
              <Box
                basis={isMobile ? 'full' : '2/3'}
                pad="medium"
                align="center"
                justify={isMobile ? 'center' : 'start'}
                className={styles.mainContent}
              >
                <Heading align="center">
                  Content Dashboard
                </Heading>
                <Box pad="large">
                  {articles && articles.length > 0 &&
                    <DashboardTable
                      isMobile={isMobile}
                      articles={articles}
                      onDeleteArticle={(id) => this.handleOpenModal(id)}
                    />
                  }
                </Box>
              </Box>
            {user && user.role === 'admin' &&
              <MainAside
                user={user}
              />
            }
          </Box>
        }
        </Section>
      </div>
    );
  }
}

ContentDashboard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  message: PropTypes.string,
  articles: PropTypes.array,
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  isShowingModal: PropTypes.bool.isRequired,
  selectedArticleId: PropTypes.number,
  deleteArticleMutation: PropTypes.func.isRequired,
  authToken: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isLoading: state.contentDashboardContainer.isLoading,
  errorMessage: state.contentDashboardContainer.error,
  articles: state.contentDashboardContainer.articles,
  isShowingModal: state.contentDashboardContainer.isShowingModal,
  selectedArticleId: state.contentDashboardContainer.selectedArticleId,
  message: state.contentDashboardContainer.message,
  user: state.app.user,
  authToken: state.app.authToken,
  isMobile: state.app.isMobile,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ContentDashboardActionCreators,
    dispatch
  ),
});

const Container = cssModules(ContentDashboard, styles);

const deleteArticleMutation = gql`
  mutation deleteArticle($authToken: String!, $id: ID!) {
    DeleteArticle(input: { id: $id, auth_token: $authToken }) {
      id: deleted_id
    }
  }
`;

const ContainerWithMutations = graphql(deleteArticleMutation, {
  props: ({ mutate }) => ({
    deleteArticleMutation: mutate,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutations);
