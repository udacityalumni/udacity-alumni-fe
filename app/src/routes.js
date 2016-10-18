import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import store, { history } from './store';
import client from './apolloClient';
import App from 'components/App';
import * as Pages from 'pages';

const routes = (
  <ApolloProvider store={store} client={client}>
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
        <Route path="/admin/cms" component={Pages.CmsEditorPage} />
        <Route path="/martin" component={Pages.MartinPage} />
        <Route path="/search" component={Pages.SearchPage} />
        <Route path="/logout" component={Pages.LogoutPage} />
        <Route path="/notyet" component={Pages.NotYetReadyPage} />
        <Route path="/careers" component={Pages.NotYetReadyPage} />
        <Route path="/meetups" component={Pages.MeetupsPage} />
        <Route path="/mentorship" component={Pages.MentorshipPage} />
        <Route path="/admin/carousel" component={Pages.CarouselWidgetPage} />
        <Route path="*" component={Pages.NotFoundPage} />
      </Route>
    </Router>
  </ApolloProvider>
);

export default routes;
