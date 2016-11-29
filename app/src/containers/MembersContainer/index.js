import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MembersActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import Columns from 'grommet-udacity/components/Columns';
import Anchor from 'grommet-udacity/components/Anchor';
import { LoadingIndicator, Member, Divider } from 'components';

class MembersContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      users,
      usersLoading,
    } = this.props;
    return (
      <Box align="center" justify="center">
        {usersLoading ?
          <Section className="full-height" align="center" justify="center">
            <LoadingIndicator isLoading />
          </Section>
        :
          <Section className={styles.members}>
            <Headline align="center" style={{ marginTop: 60 }}>
              Our Awesome Members
            </Headline>
            <Divider />
            <Columns
              className={styles.masonry}
              masonry
              justify="center"
              size="small"
              maxCount={3}
            >
              {users.map((user, i) =>
                <Anchor key={i} href={`/members/member/${user.id}`}>
                  <Box size="medium">
                    <Member user={user} />
                  </Box>
                </Anchor>
              )}
            </Columns>
          </Section>
        }
      </Box>
    );
  }
}

MembersContainer.propTypes = {
  users: PropTypes.array,
  usersLoading: PropTypes.bool.isRequired,
  usersError: PropTypes.object,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    MembersActionCreators,
    dispatch
  ),
});

const Container = cssModules(MembersContainer, styles);

const publicUsersQuery = gql`
  query publicUsers {
    publicUsers {
      id
      name
      avatar
      bio
    }
  }
`;

const ContainerWithData = graphql(publicUsersQuery, {
  props: ({ data: { error, loading, publicUsers } }) => ({
    users: publicUsers,
    usersError: error,
    usersLoading: loading,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
