import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ContentDashboardActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import { MainAside, DashboardTable } from 'components';

class ContentDashboard extends Component {
  componentDidMount() {
    const {
      loadDashboardArticles,
    } = this.props.actions;
    loadDashboardArticles();
  }
  render() {
    const {
      user,
      articles,
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
              {articles && articles.length > 0 &&
                <DashboardTable articles={articles} />
              }
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
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  articles: PropTypes.array,
  actions: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isLoading: state.contentDashboardContainer.isLoading,
  errorMessage: state.contentDashboardContainer.error,
  articles: state.contentDashboardContainer.articles,
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
