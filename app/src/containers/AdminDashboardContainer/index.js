import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import * as AdminDashboardActionCreators from './actions';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Tabs from 'grommet-udacity/components/Tabs';
import Tab from 'grommet-udacity/components/Tab';
import { LoadingIndicator, MainAside } from 'components';
import { FullSection, MainContent } from './styles';

class AdminDashboard extends Component {
  render() {
    const {
      isMobile,
      isLoading,
      user,
      actions,
      activeTab,
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
                <Tabs
                  responsive={false}
                  onActive={(index) => actions.setActiveTab(index)}
                  activeIndex={activeTab}
                >
                  <Tab title="Users">

                  </Tab>
                  <Tab title="Articles">

                  </Tab>
                </Tabs>
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
  user: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
  activeTab: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isMobile: state.app.isMobile,
  user: state.app.user,
  activeTab: state.adminDashboardContainer.activeTab,
  actions: PropTypes.object.isRequired,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    AdminDashboardActionCreators,
    dispatch
  ),
});

const getAllUsersQuery = gql`
  query getAllUsers($authToken: String!) {
    allUsers(auth_token: $token) {
      name
      avatar
      bio
      role
      public
    }
  }
`;

const ContainerWithUsers = graphql(getAllUsersQuery, {
  options: (ownProps) => ({
    skip: !ownProps.user.authToken,
    variables: {
      authToken: ownProps.user.authToken,
    },
  }),
  props: ({ data: { loading, error, allUsers } }) => ({
    users: allUsers,
    isLoading: loading,
    error,
  }),
})(AdminDashboard);

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
