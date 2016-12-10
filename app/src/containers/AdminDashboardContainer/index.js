import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import { reduxForm } from 'redux-form';
import gql from 'graphql-tag';
import * as AdminDashboardActionCreators from './actions';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Tabs from 'grommet-udacity/components/Tabs';
import Tab from 'grommet-udacity/components/Tab';
import ExpandIcon from 'grommet-udacity/components/icons/base/Expand';
import ContractIcon from 'grommet-udacity/components/icons/base/Contract';
import Button from 'grommet-udacity/components/Button';
import { FullSection, MainContent, MainBox, AsideButtonContainer } from './styles';
import { getSortedUsers, getPagedArticles } from './selectors';
import {
  LoadingIndicator,
  DashboardTable,
  UserDashboardTable,
  MainAside,
  ToastMessage,
  AvatarFormModal,
} from 'components';

export const formFields = [
  'nameInput',
  'emailInput',
  'roleInput',
  'publicInput',
  'bioInput',
];

class AdminDashboard extends Component {
  constructor() {
    super();
    this.handleEditing = this.handleEditing.bind(this);
    this.handleClearing = this.handleClearing.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
  }
  componentWillReceiveProps({ users, articles }) {
    if (users && users !== this.props.users) {
      this.props.actions.setUsers(users);
    }
    if (articles && articles !== this.props.articles) {
      this.props.actions.setArticles(articles);
    }
  }
  handleEditing(user) {
    const {
      fields,
      actions,
    } = this.props;
    fields.nameInput.onChange(user.name);
    fields.emailInput.onChange(user.email);
    fields.bioInput.onChange(user.bio);
    fields.roleInput.onChange(`${user.role.slice(0, 1).toUpperCase()}${user.role.slice(1)}`);
    fields.publicInput.onChange(user.public);
    actions.setUserEditing(user.id);
  }
  handleClearing() {
    this.props.actions.clearUserEditing();
  }
  handleSave() {
    const {
      authToken,
      fields,
      updateUserMutation,
      refetch,
      actions,
    } = this.props;
    const user = {
      name: fields.nameInput.value,
      email: fields.emailInput.value,
      role: fields.roleInput.value.toLowerCase(),
      public: fields.publicInput.value,
      bio: fields.bioInput.value,
    };
    const data = {
      variables: {
        user,
        authToken,
        user_id: this.props.editingIndex,
      },
    };
    updateUserMutation(data)
      .then(() => {
        actions.clearUserEditing();
        refetch();
      })
      .catch(err => {
        actions.setDashboardError(err);
      });
  }
  handleSorting(index, ascending) {
    this.props.actions.setSortOptions(index, ascending);
  }
  render() {
    const {
      isMobile,
      isLoading,
      user,
      actions,
      activeTab,
      users,
      pagedUsers,
      articles,
      pagedArticles,
      articlesConfig,
      usersConfig,
      editingIndex,
      userRoles,
      fields,
      showAside,
      sortAscending,
      sortIndex,
      dashboardError,
      modal,
    } = this.props;
    return (
      <MainBox
        alignContent="center"
        fill="horizontal"
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
          <FullSection direction="row">
            <MainContent
              pad="large"
              align="center"
              justify="start"
            >
              <Heading align="center">
                Admin Dashboard
              </Heading>
              <Box pad="large">
                {users && users.length && articles && articles.length &&
                  <Tabs
                    responsive={false}
                    onActive={(index) => actions.setActiveTab(index)}
                    activeIndex={activeTab}
                  >
                    {users && users.length > 0 &&
                      <Tab title="Users" onRequestForActive={() => actions.setActiveTab(1)}>
                        <Box>
                          <UserDashboardTable
                            fields={fields}
                            userRoles={userRoles}
                            users={pagedUsers}
                            isMobile={isMobile}
                            perPage={usersConfig.perPage}
                            onChangePage={actions.setUsersPage}
                            currentPage={usersConfig.currentPage}
                            editingIndex={editingIndex}
                            allUsers={users}
                            onEdit={this.handleEditing}
                            onClear={this.handleClearing}
                            onSave={this.handleSave}
                            onSort={this.handleSorting}
                            sortIndex={sortIndex}
                            sortAscending={sortAscending}
                            onAvatarClick={actions.openAvatarModal}
                          />
                        </Box>
                      </Tab>
                    }
                    {articles && articles.length > 0 &&
                      <Tab title="Articles" onRequestForActive={() => actions.setActiveTab(2)}>
                        <Box>
                          <DashboardTable
                            items={pagedArticles}
                            isMobile={isMobile}
                            perPage={articlesConfig.perPage}
                            currentPage={articlesConfig.currentPage}
                            onChangePage={actions.setArticlesPage}
                            allItems={articles}
                            onDelete={e => e}
                            onEdit={e => e}
                            onShow={e => e}
                          />
                        </Box>
                      </Tab>
                    }
                  </Tabs>
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
            {showAside && user &&
              <MainAside user={user} />
            }
          </FullSection>
        }
        {dashboardError &&
          <ToastMessage
            message={dashboardError.message}
            onClose={actions.clearDashboardError}
            status="critical"
          />
        }
        <AvatarFormModal
          isVisible={modal.isVisible}
          onClose={actions.editAvatarInput}
          onSave={this.handleSavingAvatar}
          onCancel={actions.closeAvatarModal}
          onChange={actions.editAvatarInput}
          avatarString={modal.avatarInput}
          user={users[modal.userId]}
        />
      </MainBox>
    );
  }
}

AdminDashboard.propTypes = {
  updateUserMutation: PropTypes.func.isRequired,
  users: PropTypes.array,
  articles: PropTypes.array,
  user: PropTypes.object,
  authToken: PropTypes.string,
  isMobile: PropTypes.bool.isRequired,
  activeTab: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  usersConfig: PropTypes.object.isRequired,
  articlesConfig: PropTypes.object.isRequired,
  pagedUsers: PropTypes.array,
  pagedArticles: PropTypes.array,
  editingIndex: PropTypes.number,
  userRoles: PropTypes.array,
  fields: PropTypes.array.isRequired,
  showAside: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired,
  dashboardError: PropTypes.object,
  sortIndex: PropTypes.number.isRequired,
  modal: PropTypes.object.isRequired,
  sortAscending: PropTypes.bool.isRequired,
};

AdminDashboard.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isMobile: state.app.isMobile,
  user: state.app.user,
  authToken: state.app.authToken,
  sortIndex: state.adminDashboardContainer.userTable.sortIndex,
  sortAscending: state.adminDashboardContainer.userTable.sortAscending,
  activeTab: state.adminDashboardContainer.activeTab,
  usersConfig: state.adminDashboardContainer.users,
  articlesConfig: state.adminDashboardContainer.articles,
  editingIndex: state.adminDashboardContainer.users.editing,
  showAside: state.adminDashboardContainer.aside.isVisible,
  modal: state.adminDashboardContainer.modal,
  pagedUsers: getSortedUsers(state.adminDashboardContainer),
  pagedArticles: getPagedArticles(state.adminDashboardContainer),
  dashboardError: state.adminDashboardContainer.error,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    AdminDashboardActionCreators,
    dispatch
  ),
});

const FormContainer = reduxForm({
  form: 'AdminEditUser',
  fields: formFields,
})(AdminDashboard);

const getDashboardData = gql`
  query getDashboardData($authToken: String!) {
    allUsers(auth_token: $authToken) {
      id
      name
      email
      avatar
      bio
      role
      public
    }
    userRoles
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

const ContainerWithUsers = graphql(getDashboardData, {
  options: (ownProps) => ({
    skip: !ownProps.authToken,
    variables: {
      authToken: ownProps.authToken,
    },
  }),
  props: ({ data: { loading, error, allUsers, allArticles, userRoles, refetch } }) => ({
    users: allUsers,
    isLoading: loading,
    error,
    articles: allArticles,
    userRoles,
    refetch,
  }),
})(FormContainer);

const updateUserMutation = gql`
mutation updateUser($authToken:String!, $user:AdminUserInput, $user_id: ID!) {
  AdminUpdateUser(input:{ auth_token: $authToken, user_id: $user_id, user: $user}) {
    user {
      __typename
    }
  }
}
`;

const ContainerWithMutations = graphql(updateUserMutation, {
  props: ({ mutate }) => ({
    updateUserMutation: mutate,
  }),
})(ContainerWithUsers);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutations);
