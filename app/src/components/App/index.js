import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { Navbar } from 'components';
import App from 'grommet/components/App';

const Main = (props) => (
  <App centered={false}>
    <Navbar onSearch={(e) => e} />
    {React.cloneElement(props.children, props)}
  </App>
);

Main.propTypes = {
  children: React.children,
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
