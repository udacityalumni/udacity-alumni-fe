import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import App from 'grommet-udacity/components/App';
import { MobileNav, LogoImage, Navbar } from 'components';
import { updatePageTitle, getTitleFromRoute } from 'utils/a11y';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import Anchor from 'grommet-udacity/components/Anchor';
import MenuIcon from 'grommet-udacity/components/icons/base/Menu';

class Main extends Component {
  constructor() {
    super();
    this.handleToggleNav = this.handleToggleNav.bind(this);
    this.handleSetMobile = this.handleSetMobile.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    const {
      pathname,
    } = this.props.location;
    updatePageTitle(getTitleFromRoute(pathname));
    this.handleSetMobile();
    if (window) {
      window.addEventListener('resize', this.handleSetMobile);
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
  }
  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.handleSetMobile);
    }
  }
  handleSetMobile() {
    const isMobile = window.innerWidth <= 768;
    const {
      appSetMobile,
    } = this.props.actions;
    appSetMobile(isMobile);
  }
  handleToggleNav() {
    const {
      appToggleNav,
    } = this.props.actions;
    appToggleNav();
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
    } = this.props;
    return (
      <App centered={false}>
        {!isMobile ?
          <main>
            <Navbar onSearch={this.handleSearch} />
            {React.cloneElement(this.props.children, this.props)}
          </main>
        :
          <MobileNav
            user={user}
            navActive={navIsActive}
            onToggleNav={this.handleToggleNav}
            navLinks={navLinks}
          >
            <Header
              direction="row"
              justify="between"
              large
              pad={{ horizontal: 'medium', between: 'small' }}
            >
              {!navIsActive &&
                <Title a11yTitle="Go Home">
                  <Anchor href="/">
                    <LogoImage />
                  </Anchor>
                </Title>
              }
              <Title onClick={this.handleToggleNav} a11yTitle="Open Menu Right">
                <MenuIcon colorIndex="brand" size="medium" type="control" />
              </Title>
            </Header>
            {React.cloneElement(this.props.children, this.props)}
          </MobileNav>
        }
      </App>
    );
  }
}

Main.propTypes = {
  children: React.children,
  location: PropTypes.object.isRequired,
  user: PropTypes.object,
  isMobile: PropTypes.bool.isRequired,
  navIsActive: PropTypes.bool.isRequired,
  navLinks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

Main.contextTypes = {
  router: PropTypes.func.isRequired,
};

// Map the global state to global props here.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
// mapStateToProps :: {State} -> {Action}
const mapStateToProps = (state) => ({
  user: state.app.user,
  navIsActive: state.app.navIsActive,
  isMobile: state.app.isMobile,
  navLinks: state.app.navLinks,
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
