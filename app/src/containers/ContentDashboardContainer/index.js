import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ContentDashboardActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Table from 'grommet-udacity/components/Table';
import TableRow from 'grommet-udacity/components/TableRow';
import { MainAside } from 'components';

class ContentDashboard extends Component {
  render() {
    const {
      user,
    } = this.props;
    return (
      <div className={styles.contentDashboard}>
        <Section
          alignContent="center"
          align="center"
        >
          <Box direction="row">
            <Box
              basis="2/3"
              pad="medium"
              align="center"
              justify="start"
              className={styles.mainContent}
            >
              <Heading tag="h3" align="center">
                Content Dashboard Creator
              </Heading>
              <Box
                pad="large"
                style={{ minHeight: 300, minWidth: 600, border: '1px solid black' }}
                color="light-2"
              >
                <Table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th></th>
                      <th>Author</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow>
                      {/* Map over recent articles here */}
                    </TableRow>
                    <TableRow>
                      {/* Map over status here */}
                    </TableRow>
                    <TableRow>
                      {/* Map over authors */}
                    </TableRow>
                    <TableRow>
                      {/* Crud actions */}
                    </TableRow>
                  </tbody>
                </Table>
              </Box>
            </Box>
            <MainAside
              user={user}
            />
          </Box>
        </Section>
      </div>
    );
  }
}

ContentDashboard.propTypes = {
  user: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ContentDashboardActionCreators,
    dispatch
  ),
});

const Container = cssModules(ContentDashboard, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
