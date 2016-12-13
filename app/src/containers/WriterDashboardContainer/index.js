import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as WriterDashboardActionCreators from './actions';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import ExpandIcon from 'grommet-udacity/components/icons/base/Expand';
import ContractIcon from 'grommet-udacity/components/icons/base/Contract';
import Button from 'grommet-udacity/components/Button';
import { FullSection, MainContent, AsideButtonContainer } from './styles';
import { getSortedArticles } from './selectors';
import {
  LoadingIndicator,
  DashboardTable,
  MainAside,
  ToastMessage,
  Divider,
  ConfirmationModal,
} from 'components';

class WriterDashboardContainer extends Component {
  componentWillReceiveProps({ articles }) {
    if (articles && articles !== this.props.articles) {
      this.props.actions.setArticles(articles);
    }
  }
  render() {
    const {
      isLoading,
      articlesConfig,
      errorLoading,
      actions,
      articles,
      isMobile,
      message,
      pagedArticles,
      showAside,
      user,
      confirmationModal,
    } = this.props;
    return (
      <Box
        alignContent="center"
        fill="horizontal"
        align="center"
      >
       {isLoading || !articles ?
         <Section
           align="center"
           justify="center"
           className="loading__box"
         >
           <LoadingIndicator isLoading />
         </Section>
        :
          <FullSection primary direction="row">
            <MainContent
              align="center"
              justify="start"
              pad={{ vertical: 'large' }}
            >
              <Heading align="center">
                Dashboard
              </Heading>
              <Divider />
              <Box>
                {pagedArticles && articles &&
                  <DashboardTable
                    items={pagedArticles}
                    isMobile={isMobile}
                    perPage={articlesConfig.perPage}
                    currentPage={articlesConfig.currentPage}
                    onChangePage={actions.setArticlesPage}
                    allItems={articles}
                    onSort={actions.setSortOptions}
                    sortIndex={articlesConfig.sortIndex}
                    sortAscending={articlesConfig.sortAscending}
                    onDelete={({ id }) => actions.openConfirmationModal(id)}
                    onEdit={({ id }) => actions.editArticle(id)}
                    onShow={({ slug }) => actions.viewArticle(slug)}
                  />
                }
              </Box>
              <AsideButtonContainer>
                <Button
                  plain
                  label={`${showAside ? 'Hide' : 'Show'} Aside`}
                  icon={!showAside ? <ExpandIcon /> : <ContractIcon />}
                  onClick={actions.toggleAside}
                />
              </AsideButtonContainer>
            </MainContent>
            {showAside && user && <MainAside user={user} />}
          </FullSection>
        }
        {errorLoading &&
          <ToastMessage
            message={errorLoading.message}
            onClose={actions.clearDashboardError}
            status="critical"
          />
        }
        {message &&
          <ToastMessage
            message={message}
            onClose={actions.clearDashboardMessage}
            status="ok"
          />
        }
        <ConfirmationModal
          isVisible={confirmationModal.isVisible}
          onConfirm={() => this.handleDeletingArticle()}
          onCancel={() => actions.cancelDeletingArticle()}
          title="Confirm Deletion"
        />
      </Box>
    );
  }
}

WriterDashboardContainer.propTypes = {
  articlesConfig: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorLoading: PropTypes.object,
  articles: PropTypes.array,
  pagedArticles: PropTypes.array,
  actions: PropTypes.object.isRequired,
  message: PropTypes.string,
  isMobile: PropTypes.bool.isRequired,
  confirmationModal: PropTypes.object.isRequired,
  showAside: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  authToken: state.app.authToken,
  message: state.writerDashboard.message,
  articlesConfig: state.writerDashboard.articles,
  confirmationModal: state.writerDashboard.confirmationModal,
  showAside: state.writerDashboard.aside.isVisible,
  pagedArticles: getSortedArticles(state.writerDashboard),
  isMobile: state.app.isMobile,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    WriterDashboardActionCreators,
    dispatch
  ),
});

const Container = WriterDashboardContainer;

const fetchArticlesQuery = gql`
  query fetchArticles($authToken: String!) {
    allArticles(auth_token: $authToken) {
      id
      title
      status
      slug
      content
      user {
        name
      }
      image: feature_image
      created_at
      updated_at
      featured
      tags {
        id
        tag
      }
    }
  }
`;

const ContainerWithData = graphql(fetchArticlesQuery, {
  options: (ownProps) => ({
    skip: !ownProps.authToken,
    variables: {
      authToken: ownProps.authToken,
    },
  }),
  props: ({ data: { loading, error, allArticles } }) => ({
    articles: allArticles,
    isLoading: loading,
    errorLoading: error,
  }),
})(Container);

const deleteArticleMutation = gql`
  mutation deleteArticle($authToken: String!, $id: ID!) {
    DeleteArticle(input: { id: $id, auth_token: $authToken }) {
      id: deleted_id
    }
  }
`;

const ContainerWithMutation = graphql(deleteArticleMutation, {
  props: ({ mutate }) => ({
    deleteArticleMutation: mutate,
  }),
})(ContainerWithData);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
