import React from 'react';
import { Router, Redirect } from 'react-router';
import { formatPattern } from 'react-router/lib/PatternUtils';
import { ApolloProvider } from 'react-apollo';
import store, {
  history,
  // Uncomment to apply authentiation
  // userIsAuthenticated,
  // userIsAdmin,
} from './store';
import client from './apolloClient';
import App from './components/App';

export function redirect({ from, to }) {
  return {
    path: from,
    onEnter(nextState, replace) {
      const { location, params } = nextState;

      let pathname;
      if (to.charAt(0) === '/') {
        pathname = formatPattern(to, params);
      } else if (!to) {
        pathname = location.pathname;
      } else {
        const routeIndex = nextState.routes.indexOf(this);
        const parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
        const pattern = parentPattern.replace(/\/*$/, '/') + to;
        pathname = formatPattern(pattern, params);
      }

      replace({
        pathname,
        query: this.query || location.query,
        state: this.state || location.state,
      });
    },
  };
}

/* eslint-disable */
// Polyfill for the System.import
if (typeof System === 'undefined') {
  var System = {
  import(path) {
    return Promise.resolve(require(path));
  },
  };
}
/* eslint-enable */

// Switching to system.import to make use of dynamic tree shaking
// https://medium.com/modus-create-front-end-development/automatic-code-splitting-for-react-router-w-es6-imports-a0abdaa491e9#.msrxv8fwd
const errorLoading = (err) => {
  throw err;
  console.error(`Error thrown ${JSON.stringify(err, null, 2)}`);
};

const loadRoute = (cb) =>
  (module) =>
  cb(null, module.default);

export const routes = {
  component: App,
  path: '/',
  indexRoute: {
    getComponent(location, callback) {
      System.import('./pages/LandingPage') // eslint-disable-line block-scoped-var
        .then(loadRoute(callback))
        .catch((err) => errorLoading(err));
    },
  },
  childRoutes: [
    {
      path: 'articles/:slug',
      getComponent(location, callback) {
        System.import('./pages/SingleArticlePage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'login',
      getComponent(location, callback) {
        System.import('./pages/LoginPage') // eslint-disable-line block-scoped-var
        .then(loadRoute(callback))
        .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'signup',
      getComponent(location, callback) {
        System.import('./pages/SignupPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'search',
      getComponent(location, callback) {
        System.import('./pages/SearchPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '/archive',
      getComponent(location, callback) {
        System.import('./pages/ArchivePage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'logout',
      getComponent(location, callback) {
        System.import('./pages/LogoutPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'notyet',
      getComponent(location, callback) {
        System.import('./pages/NotYetReadyPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'careers',
      getComponent(location, callback) {
        System.import('./pages/NotYetReadyPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'meetups',
      getComponent(location, callback) {
        System.import('./pages/MeetupsPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'mentorship',
      getComponent(location, callback) {
        System.import('./pages/MentorshipPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'admin/carousel',
      getComponent(location, callback) {
        System.import('./pages/CarouselWidgetPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'admin/content-dashboard',
      getComponent(location, callback) {
        System.import('./pages/ContentDashboardPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'admin/cms',
      getComponent(location, callback) {
        System.import('./pages/CmsEditorPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'me/profile',
      getComponent(location, callback) {
        System.import('./pages/UserProfilePage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '/members',
      getComponent(location, callback) {
        System.import('./pages/MembersPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '/about',
      getComponent(location, callback) {
        System.import('./pages/AboutPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: 'users/password/edit',
      getComponent(location, callback) {
        System.import('./pages/ResetPasswordPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '/members/member/:id',
      getComponent(location, callback) {
        System.import('./pages/PublicUserProfilePage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
    {
      path: '/admin/dashboard',
      getComponent(location, callback) {
        System.import('./pages/AdminDashboardPage')  // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
      },
    },
/* Newly generated Routes go here */
    {
      path: '*',
      getComponent(location, callback) {
        System.import('./pages/NotFoundPage') // eslint-disable-line block-scoped-var
          .then(loadRoute(callback))
          .catch((err) => errorLoading(err));
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
