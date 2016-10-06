import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import App from 'grommet-udacity/components/App';
import { MobileNav, LogoImage, Navbar } from 'components';
import { updatePageTitle, getTitleFromRoute } from 'utils/a11y';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import MenuIcon from 'grommet-udacity/components/icons/base/Menu';

class Main extends Component {
  constructor() {
    super();
    this.handleToggleNav = this.handleToggleNav.bind(this);
    this.handleSetMobile = this.handleSetMobile.bind(this);
    this.state = {
      navIsActive: false,
      isMobile: false,
    };
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
    this.setState({
      isMobile,
    });
  }
  handleToggleNav() {
    const {
      navIsActive,
    } = this.state;
    this.setState({
      navIsActive: !navIsActive,
    });
  }
  render() {
    const {
      navIsActive,
      isMobile,
    } = this.state;
    return (
      <App centered={false}>
        {!isMobile ?
          <main>
            <Navbar onSearch={(e) => e} />
            {React.cloneElement(this.props.children, this.props)}
          </main>
        :
          <MobileNav
            navActive={navIsActive}
            onToggleNav={this.handleToggleNav}
            navLinks={[
              {
                url: '/careers',
                text: 'Careers',
              },
              {
                url: '/mentorship',
                text: 'Mentorship',
              },
              {
                url: '/meetups',
                text: 'Meetups',
              },
            ]}
          >
            <Header
              direction="row"
              justify="between"
              large
              pad={{ horizontal: 'medium', between: 'small' }}
            >
              {!navIsActive &&
                <Title onClick={this.handleToggleNav} a11yTitle="Open Menu Left">
                  <LogoImage />
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
};

// Map the global state to global props here.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
// mapStateToProps :: {State} -> {Action}
const mapStateToProps = (state) => ({
  messages: state.messages,
  errors: state.errors,
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
