import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import * as AppActions from 'components/App/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LogoutPage extends Component {
  componentDidMount() {
    const {
      logoutUser,
    } = this.props.actions;
    logoutUser();
    this.context.router.push('/');
  }
  render() {
    return (
      <div className={styles.container} />
    );
  }
}

LogoutPage.propTypes = {
  actions: PropTypes.object.isRequired,
};

LogoutPage.contextTypes = {
  router: PropTypes.func.isRequired,
};

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    AppActions,
    dispatch
  ),
});

const Container = cssModules(LogoutPage, styles);

export default connect(
  null,
  mapDispatchToProps,
)(Container);
