import React, { Component, PropTypes } from 'react';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Markdown from 'grommet-udacity/components/Markdown';
import Box from 'grommet-udacity/components/Box';
import { LoadingIndicator } from 'components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';
import { Avatar } from 'components';
import { Spotlight } from './styles';

class PublicUserProfile extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      userLoading,
      user,
    } = this.props;
    return (
      <Box align="center" justify="center">
        {userLoading || !user ?
          <Section className="full-height" align="center" justify="center">
            <LoadingIndicator isLoading />
          </Section>
        :
          <Section align="center" justify="center" fill="horizontal">
            <Spotlight>
              <Avatar src={user.avatar} />
              <Headline>
                {user.name}
              </Headline>
              <p>{`Member since ${moment(user.date).format('MMMM Do YYYY')}`}</p>
              <Markdown content={user.bio} />
            </Spotlight>
          </Section>
        }
      </Box>
    );
  }
}

PublicUserProfile.propTypes = {
  userLoading: PropTypes.bool.isRequired,
  userError: PropTypes.object,
  user: PropTypes.object,
  params: PropTypes.object.isRequired,
};

const userQuery = gql`
  query user($id: ID!) {
    user(id: $id) {
      name
      avatar
      bio
      date: created_at
    }
  }
`;

const ContainerWithData = graphql(userQuery, {
  options: ({ params }) => ({
    skip: !params.id,
    variables: {
      id: params.id,
    },
  }),
  props: ({ data: { error, loading, user } }) => ({
    user,
    userError: error,
    userLoading: loading,
  }),
})(PublicUserProfile);

export default ContainerWithData;
