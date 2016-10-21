import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserProfileActionCreators from './actions';
import * as AppActions from '../../components/App/actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import authUserDataFragment from './graph/authUserDataFragment';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { UserProfile, LoadingIndicator, ToastMessage } from 'components';

class ProfileSubmission {
  constructor() {
    this.toData = this.toData.bind(this);
    const args = arguments[0];
    this.authToken = args.authToken;
    this.profile = {
      bio: args.bioInput,
      avatar: args.avatarInput,
      email: args.emailInput,
    };
  }
  toData() {
    return {
      authToken: this.authToken,
      profile: this.profile,
    };
  }
}

class UserProfileContainer extends Component {
  constructor() {
    super();
    this.setDefaultValues = this.setDefaultValues.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }
  setDefaultValues() {
    const {
      user,
      actions,
    } = this.props;
    actions.setDefaultInputs({
      bio: user.bio,
      email: user.email,
      avatar: user.avatar,
    });
  }
  handleSubmission() {
    const {
      bioInput,
      emailInput,
      avatarInput,
      actions,
      authToken,
      updateProfile,
    } = this.props;
    const profileData = new ProfileSubmission({
      authToken,
      bioInput,
      avatarInput,
      emailInput,
    }).toData();
    actions.profileSubmissionInitiation();
    updateProfile(profileData)
      .then(() =>
        actions.profileSubmissionSuccess()
      )
      .catch(err =>
        actions.profileSubmissionFailure(err.message)
      );
  }
  render() {
    const {
      user,
      bioInput,
      avatarInput,
      isEditing,
      emailInput,
      isLoading,
      submissionError,
      actions,
    } = this.props;
    return (
      <Section className={styles.userProfile}>
        <Box
          justify="center"
          align="center"
          pad={{ horizontal: 'large' }}
        >
          {isLoading &&
            <Section
              className="full-height"
              align="center"
              justify="center"
            >
              <LoadingIndicator isLoading />
            </Section>
          }
          {submissionError &&
            <ToastMessage
              status="critical"
              message={submissionError}
              onClose={() => actions.profileClearError()}
            />
          }
          {user &&
            <UserProfile
              user={user}
              isEditing={isEditing}
              onEditEmail={({ target }) => actions.profileEditEmail(target.value)}
              onEditBio={({ target }) => actions.profileEditBio(target.value)}
              onEditAvatar={({ target }) => actions.profileEditAvatar(target.value)}
              onClickToEdit={() => {
                this.setDefaultValues();
                actions.profileStartEditing();
              }}
              onCancel={() => actions.profileCancelEditing()}
              onSaveEdit={this.handleSubmission}
              bioInput={bioInput}
              avatarInput={avatarInput}
              emailInput={emailInput}
            />
          }
        </Box>
      </Section>
    );
  }
}

UserProfileContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired,
  user: PropTypes.object,
  isEditing: PropTypes.bool.isRequired,
  bioInput: PropTypes.string,
  submissionError: PropTypes.string,
  refetch: PropTypes.func.isRequired,
  avatarInput: PropTypes.string,
  employerInput: PropTypes.string,
  emailInput: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  authToken: PropTypes.string.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.app.user,
  authToken: state.app.authToken,
  bioInput: state.userProfileContainer.bioInput,
  submissionError: state.userProfileContainer.error,
  isEditing: state.userProfileContainer.isEditing,
  avatarInput: state.userProfileContainer.avatarInput,
  emailInput: state.userProfileContainer.emailInput,
  employerInput: state.userProfileContainer.employerInput,
  isLoading: state.userProfileContainer.isLoading,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({},
      AppActions,
      UserProfileActionCreators
    ),
    dispatch
  ),
});

const Container = cssModules(UserProfileContainer, styles);

const updateProfileMutation = gql`
  mutation updateProfile($profile: ProfileInput, $authToken: String!) {
    UpdateProfile(input: { profile: $profile, auth_token: $authToken }) {
      user {
        ...authUserData
      }
    }
  }
`;

const ContainerWithMutation = graphql(updateProfileMutation, {
  options: () => ({
    fragments: [authUserDataFragment],
  }),
  props: ({ ownProps, mutate }) => ({
    updateProfile({ authToken, profile }) {
      return new Promise((resolve, reject) =>
        mutate({
          variables: { authToken, profile },
        })
        .then(mutationResult => {
          ownProps.actions.setPersistentUser(mutationResult.data.UpdateProfile.user);
          resolve(mutationResult);
        })
        .catch(err => reject(err))
      );
    },
  }),
})(Container);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
