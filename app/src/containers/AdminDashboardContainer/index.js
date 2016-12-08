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
import { LoadingIndicator, MainAside, DashboardTable, UserDashboardTable } from 'components';
import { FullSection, MainContent } from './styles';
import { getPagedUsers, getPagedArticles } from './selectors';

export const formFields = [
  'nameInput',
  'emailInput',
  'roleInput',
  'publicInput',
  'bioInput',
];

class AdminDashboard extends Component {
  componentWillReceiveProps({ users, articles }) {
    if (users && users !== this.props.users) {
      this.props.actions.setUsers(users);
    }
    if (articles && articles !== this.props.articles) {
      this.props.actions.setArticles(articles);
    }
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
    } = this.props;
    return (
      <Box
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
          <FullSection
            direction="row"
          >
            <MainContent
              basis={isMobile ? 'full' : '3/4'}
              pad="medium"
              align="center"
              justify={isMobile ? 'center' : 'start'}
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
                            onEdit={({ id }) => actions.setUserEditing(id)}
                            onShow={e => e}
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
            </MainContent>
            {user && user.role === 'admin' &&
              <MainAside
                user={user}
              />
            }
          </FullSection>
        }
      </Box>
    );
  }
}

AdminDashboard.propTypes = {
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
};

AdminDashboard.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isMobile: state.app.isMobile,
  user: state.app.user,
  authToken: state.app.authToken,
  activeTab: state.adminDashboardContainer.activeTab,
  usersConfig: state.adminDashboardContainer.users,
  articlesConfig: state.adminDashboardContainer.articles,
  editingIndex: state.adminDashboardContainer.users.editing,
  pagedUsers: getPagedUsers(state.adminDashboardContainer),
  pagedArticles: getPagedArticles(state.adminDashboardContainer),
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
  props: ({ data: { loading, error, allUsers, allArticles, userRoles } }) => ({
    users: allUsers,
    isLoading: loading,
    error,
    articles: allArticles,
    userRoles,
  }),
})(FormContainer);

const updateUserMutation = gql`
mutation updateUser($token:String!, $user:AdminUserInput, $user_id: ID!) {
  AdminUpdateUser(input:{ auth_token: $token, user_id: $user_id, user: $user}) {
    user {
      id
      name
      public
      role
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
