import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
/* eslint-disable */
import App from 'components/App';
import * as Pages from 'pages';
/* eslint-enable */

const routes = (
  <Provider store={store}>
    <Router
      history={history} // Scroll to top on route transitions
      onUpdate={() => window.scrollTo(0, 0)} // eslint-disable-line
    >
      <Route path="/" component={App}>
        <IndexRoute component={Pages.LandingPage} />
        <Route path="articles/:id" component={Pages.SingleArticlePage} />
        <Route path="/admin/content-dashboard" component={Pages.ContentDashboardPage} />
        <Route path="/login" component={Pages.LoginPage} />
        <Route path="/signup" component={Pages.SignupPage} />
        <Route path="admin/new-story" component={Pages.CmsEditorPage} />
        <Route path="/martin" component={Pages.MartinPage} />
        <Route path="*" component={Pages.NotFoundPage} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
