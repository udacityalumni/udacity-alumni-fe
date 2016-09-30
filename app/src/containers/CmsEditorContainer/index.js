import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CmsEditorActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { CmsEditor } from 'components';

class CmsEditorContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.cmsEditor}>
        <CmsEditor />
      </div>
    );
  }
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    CmsEditorActionCreators,
    dispatch
  ),
});

const Container = cssModules(CmsEditorContainer, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
