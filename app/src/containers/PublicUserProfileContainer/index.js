import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PublicUserProfileActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Markdown from 'grommet-udacity/components/Markdown';
import { Image } from './styles';
import Box from 'grommet-udacity/components/Box';
import { LoadingIndicator } from 'components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

class PublicUserProfile extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      userLoading,
      userError,
      user,
    } = this.props;
    return (
      <Box align="center" justify="center" className={styles.publicUserProfile}>
        {userLoading || !user ?
          <Section className="full-height" align="center" justify="center">
            <LoadingIndicator isLoading />
          </Section>
        :
          <Section className={styles.user}>
            <Box className={styles.userRow}>
              <Image src={user.avatar} />
              <Headline>
                {user.name}
              </Headline>
              <p>{`Member since ${moment(user.date).format('MMMM Do YYYY')}`}</p>
              <Markdown content={user.bio} />
            </Box>
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

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    PublicUserProfileActionCreators,
    dispatch
  ),
});

const Container = cssModules(PublicUserProfile, styles);

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
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
