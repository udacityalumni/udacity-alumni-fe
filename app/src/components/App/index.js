import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { Navbar } from 'components';
import App from 'grommet-udacity/components/App';
import { MobileNav } from 'components';
import { updatePageTitle, getTitleFromRoute } from 'utils/a11y';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import MenuIcon from 'grommet-udacity/components/icons/base/Menu';

class Main extends Component {
  constructor() {
    super();
    this.handleToggleNav = this.handleToggleNav.bind(this);
    this.state = {
      navIsActive: false,
    };
  }
  componentDidMount() {
    const {
      pathname,
    } = this.props.location;
    updatePageTitle(getTitleFromRoute(pathname));
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
    } = this.state;
    return (
      <App centered={false}>
        <Navbar onSearch={(e) => e} />
        <MobileNav
          navActive={navIsActive}
          onToggleNav={this.handleToggleNav}
        >
          {React.cloneElement(this.props.children, this.props)}
        </MobileNav>
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
