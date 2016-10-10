import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActionCreators from './actions';
import * as AppActions from '../../components/app/actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import LoginForm from 'grommet-udacity/components/LoginForm';
import Box from 'grommet-udacity/components/Box';
import { LoadingIndicator, ErrorAlert, ToastMessage } from 'components';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrorClose = this.handleErrorClose.bind(this);
    this.handleToastClose = this.handleToastClose.bind(this);
  }
  componentDidMount() {
    const {
      loggedInUser,
    } = this.props;
    if (loggedInUser) {
      // Todo: reroute to a logged in route, i.e.
      // this.context.router.push('/logged-in-route');
    }
  }
  componentWillReceiveProps({ user }) {
    if (user) {
      this.props.actions.setAuthUser(user);
      setTimeout(() => {
        this.context.router.push('/me/profile');
      }, 3000);
    }
  }
  handleErrorClose(index) {
    const {
      loginClearError,
    } = this.props.actions;
    loginClearError(index);
  }
  handleToastClose() {
    const {
      loginClearMessage,
    } = this.props.actions;
    loginClearMessage();
  }
  handleSubmit({ username, password, rememberMe }) {
    const {
      performLogin,
    } = this.props.actions;
    performLogin({
      email: username,
      password,
      rememberMe,
    });
  }
  render() {
    const {
      isLoading,
      errors,
      message,
    } = this.props;
    return (
      <Section
        pad={{ horizontal: 'large' }}
        align="center"
        justify="center"
        className={styles.login}
      >
        {isLoading &&
          <LoadingIndicator
            message="Submitting"
            isLoading={isLoading}
          />
        }
        {errors && errors.length > 0 &&
          <ErrorAlert errors={errors} onClose={this.handleErrorClose} />
        }
        {message &&
          <ToastMessage message={message} onClose={this.handleToastClose} />
        }
        <Box
          size="large"
          className={styles.loginFormWrapper}
          colorIndex="light-1"
          align="center"
          pad={{ horizontal: 'small', vertical: 'small' }}
        >
          <LoginForm
            title="Udacity Alumni"
            secondaryText="Enter your credentials to Login"
            rememberMe
            logo={
              <img
                style={{ maxWidth: 150, height: 'auto' }}
                src="https://github.com/RyanCCollins/cdn/blob/master/alumni-webapp/udacity-alumni-png.png?raw=true"
              />
            }
            onSubmit={this.handleSubmit}
          />
        </Box>
      </Section>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loggedInUser: PropTypes.object,
  errors: PropTypes.array,
  user: PropTypes.object,
  message: PropTypes.string,
};

Login.contextTypes = {
  router: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.loginContainer.user,
  errors: state.loginContainer.errors,
  loggedInUser: state.loginContainer.loggedInUser,
  isLoading: state.loginContainer.isLoading,
  message: state.loginContainer.message,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign(
      AppActions,
      LoginActionCreators,
    ),
    dispatch
  ),
});

const Container = cssModules(Login, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
