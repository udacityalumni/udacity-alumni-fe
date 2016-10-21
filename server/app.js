/* eslint-disable */
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 1338 : process.env.PORT;
const path = require('path');
const express = require('express');
const app = express();

import morgan from 'morgan';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import { renderToStringWithData } from 'react-apollo/server';
import store from '../app/src/store.js';
import { routes } from '../app/src/routes.js';
import { createNetworkInterface } from 'apollo-client';
import Html from './utils/Html';
import createApolloClient from './utils/create-apollo-client';

const baseUrl = typeof process.env.BASE_URL !== 'undefined' ?
  process.env.BASE_URL : 'https://udacity-api.herokuapp.com/';
const apiUrl = `${baseUrl}graphql`;

app.use(morgan('combined'));

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
  match({ routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (error) {
        console.error('ROUTER ERROR:', error); // eslint-disable-line no-console
        res.status(500);
      } else if (renderProps) {
        console.log(`Called match with renderProps: ${renderProps}`);
        const client = createApolloClient({
          ssrMode: true,
          networkInterface: createNetworkInterface({
            uri: apiUrl,
            credentials: 'same-origin',
            headers: req.headers,
          }),
        });

        const component = (
          <ApolloProvider client={client} store={store}>
            <RouterContext {...renderProps} />
          </ApolloProvider>
        );
        renderToStringWithData(component)
          .then(({ markup, initialState }) => {
            const html = (
              <Html
                content={markup}
                scriptHash="71eea9b122d4c98f79af"
                cssHash="f0d91d73dead263291a5a8f01ecd79de"
                state={initialState}
              />
            );
            res.status(200).send(`<!doctype html>\n${renderToStaticMarkup(html)}`);
          })
          .catch(err => {
            console.error(`Rendering error ${err}`);
          })
      } else {
        res.status(404).send('Not found');
      }
    })
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    return console.warn(err);
  }
  return console.info(`==> 😎 Listening on port ${port}. Open http://0.0.0.0:${port}/ in your browser.`);
});
/* eslint-enable */
