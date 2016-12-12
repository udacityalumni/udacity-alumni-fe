import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import App from 'grommet-udacity/components/App';
import { AppNavigation, ToastMessage } from 'components';
import { updatePageTitle, getTitleFromRoute } from 'utils/a11y';

class Main extends Component {
  constructor() {
    super();
    this.handleToggleNav = this.handleToggleNav.bind(this);
    this.handleSetMobile = this.handleSetMobile.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.loadUser = this.loadUser.bind(this);
    this.handleOffline = this.handleOffline.bind(this);
  }
  componentDidMount() {
    this.loadUser();
    const {
      pathname,
    } = this.props.location;
    updatePageTitle(getTitleFromRoute(pathname));
    this.handleSetMobile();
    if (window) {
      window.addEventListener('resize', this.handleSetMobile);
      window.addEventListener('online', this.handleOffline);
      window.addEventListener('offline', this.handleOffline);
    }
  }
  componentWillReceiveProps(newProps) {
    const {
      pathname,
    } = this.props.location;
    const newPathname = newProps.location.pathname;
    if (newPathname !== pathname) {
      updatePageTitle(getTitleFromRoute(newPathname));
    }
    const {
      isOffline,
    } = newProps;
    if (isOffline !== this.props.isOffline) {
      if (isOffline) {
        this.props.actions.appSetError(
          'Warning, the app is now offline.'
        );
      } else {
        this.props.actions.appSetMessage(
          'The app is now back online!'
        );
      }
    }
  }
  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.handleSetMobile);
      window.removeEventListener('online', this.handleOffline);
      window.removeEventListener('offline', this.handleOffline);
    }
  }
  loadUser() {
    const {
      loadPersistedUser,
      loadPersistedAuthToken,
    } = this.props.actions;
    loadPersistedUser();
    loadPersistedAuthToken();
  }
  handleSetMobile() {
    const isMobile = window.innerWidth <= 860;
    const {
      appSetMobile,
    } = this.props.actions;
    if (isMobile !== this.props.isMobile) {
      appSetMobile(isMobile);
    }
  }
  handleOffline() {
    const isOffline = !navigator.onLine;
    this.props.actions.toggleOfflineMode(isOffline);
  }
  handleToggleNav(e) {
    const {
      appToggleNav,
    } = this.props.actions;
    if (!this.props.navIsActive) {
      document.body.addEventListener('click', this.handleToggleNav);
    } else {
      document.body.removeEventListener('click', this.handleToggleNav);
    }
    if (e.target.parentNode.id === 'mobile-nav' || e.target.name === 'session-menu') {
      e.stopPropagation();
    } else {
      appToggleNav();
    }
  }
  handleSearch(e) {
    const {
      router,
    } = this.context;
    const {
      setSearchTerm,
      clearSearchTerm,
    } = this.props.actions;
    if (e.target.value) {
      setSearchTerm(e.target.value);
      router.push('/search');
    } else {
      clearSearchTerm();
    }
  }
  render() {
    const {
      user,
      isMobile,
      navIsActive,
      navLinks,
      message,
      errorMessage,
      actions,
      location,
    } = this.props;
    return (
      <App centered={false}>
        {errorMessage &&
          <ToastMessage
            message={errorMessage}
            onClose={actions.appCloseToast('error')}
            status="critical"
          />
        }
        {message &&
          <ToastMessage
            message={message}
            onClose={actions.appCloseToast('message')}
          />
        }
        <AppNavigation
          pathname={location.pathname}
          isMobile={isMobile}
          user={user}
          handleSearch={this.handleSearch}
          navIsActive={navIsActive}
          navLinks={navLinks}
          onToggleNav={this.handleToggleNav}
        >
          {React.cloneElement(this.props.children, this.props)}
        </AppNavigation>
      </App>
    );
  }
}

Main.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object.isRequired,
  user: PropTypes.object,
  isMobile: PropTypes.bool.isRequired,
  navIsActive: PropTypes.bool.isRequired,
  navLinks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  isOffline: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  message: PropTypes.string,
};

Main.contextTypes = {
  router: PropTypes.object.isRequired,
};

// Map the global state to global props here.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
// mapStateToProps :: {State} -> {Action}
const mapStateToProps = (state) => ({
  user: state.app.user,
  navIsActive: state.app.navIsActive,
  isMobile: state.app.isMobile,
  navLinks: state.app.navLinks,
  isOffline: state.app.isOffline,
  errorMessage: state.app.error,
  message: state.app.message,
});

// Map the dispatch and bind the action creators.
// See: http://redux.js.org/docs/api/bindActionCreators.html
// mapDispatchToProps :: Dispatch Func -> {Actions}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch
  ),
});

// Use connect both here and in your components.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default ConnectedApp;
