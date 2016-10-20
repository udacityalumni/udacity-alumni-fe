import React from 'react';
import { Router } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import store, {
  history,
  // Uncomment to apply authentiation
  // userIsAuthenticated,
  // userIsAdmin,
} from './store';
import client from './apolloClient';
import App from './components/App';

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure');
  }
}

export const routes = {
  component: App,
  path: '/',
  indexRoute: {
    getComponent(location, callback) {
      require.ensure([], () => {
        const LandingPage = require('./pages/LandingPage').default;
        callback(null, LandingPage);
      });
    },
  },
  childRoutes: [
    {
      path: 'articles/:id',
      getComponent(location, callback) {
        require.ensure([], () => {
          const SingleArticlePage = require('./pages/SingleArticlePage').default;
          callback(null, SingleArticlePage);
        });
      },
    },
    {
      path: 'login',
      getComponent(location, callback) {
        require.ensure([], () => {
          const LoginPage = require(
            './pages/LoginPage'
        ).default;
          callback(null, LoginPage);
        });
      },
    },
    {
      path: 'signup',
      getComponent(location, callback) {
        require.ensure([], () => {
          const SignupPage = require(
            './pages/SignupPage'
          ).default;
          callback(null, SignupPage);
        });
      },
    },
    {
      path: 'search',
      getComponent(location, callback) {
        require.ensure([], () => {
          const SearchPage = require(
            './pages/SearchPage'
          ).default;
          callback(null, SearchPage);
        });
      },
    },
    {
      path: 'logout',
      getComponent(location, callback) {
        require.ensure([], () => {
          const LogoutPage = require('./pages/LogoutPage').default;
          callback(null, LogoutPage);
        });
      },
    },
    {
      path: 'notyet',
      getComponent(location, callback) {
        require.ensure([], () => {
          const NotYetReadyPage = require('./pages/NotYetReadyPage').default;
          callback(null, NotYetReadyPage);
        });
      },
    },
    {
      path: 'careers',
      getComponent(location, callback) {
        require.ensure([], () => {
          const NotYetReadyPage = require('./pages/NotYetReadyPage').default;
          callback(null, NotYetReadyPage);
        });
      },
    },
    {
      path: 'meetups',
      getComponent(location, callback) {
        require.ensure([], () => {
          const MeetupsPage = require('./pages/MeetupsPage').default;
          callback(null, MeetupsPage);
        });
      },
    },
    {
      path: 'mentorship',
      getComponent(location, callback) {
        require.ensure([], () => {
          const MentorshipPage = require('./pages/MentorshipPage').default;
          callback(null, MentorshipPage);
        });
      },
    },
    {
      path: 'admin/carousel',
      getComponent(location, callback) {
        require.ensure([], () => {
          const CarouselWidgetPage = require('./pages/CarouselWidgetPage').default;
          // Uncomment before deploying and remove the callback below
          // const ProtectedComponent = userIsAdmin(CarouselWidgetPage);
          // callback(null, ProtectedComponent);
          callback(null, CarouselWidgetPage);
        });
      },
    },
    {
      path: 'admin/content-dashboard',
      getComponent(location, callback) {
        require.ensure([], () => {
          const ContentDashboardPage = require(
            './pages/ContentDashboardPage'
          ).default;
          // Uncomment before deploying and remove the callback below
          // const ProtectedComponent = userIsAdmin(ContentDashboardPage);
          // callback(null, ProtectedComponent);
          callback(null, ContentDashboardPage);
        });
      },
    },
    {
      path: 'admin/cms',
      getComponent(location, callback) {
        require.ensure([], () => {
          const CmsEditorPage = require(
            './pages/CmsEditorPage'
          ).default;
          // Uncomment before deploying and remove the callback below
          // const ProtectedComponent = userIsAdmin(CmsEditorPage);
          // callback(null, ProtectedComponent);
          callback(null, CmsEditorPage);
        });
      },
    },
/* Newly generated Routes go here */
    {
      path: '*',
      getComponent(location, callback) {
        require.ensure([], () => {
          const NotFoundPage = require('./pages/NotFoundPage').default;
          callback(null, NotFoundPage);
        });
      },
    },
  ],
};

const RouterApp = (props) => (
  <ApolloProvider {...props} store={store} client={client}>
    <Router
      history={history} // Scroll to top on route transitions
      onUpdate={() => window.scrollTo(0, 0)} // eslint-disable-line
    >
      {routes}
    </Router>
  </ApolloProvider>
);

export default RouterApp;
