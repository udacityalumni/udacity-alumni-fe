/* eslint-disable */ // React must be in scope here
import React from 'react';
/* eslint-enable */
import { render } from 'react-dom';
import { match } from 'react-router';
import { history } from './store';
import { routes } from './routes';
import RouterApp from './routes';
import '../styles/styles.scss';

match({ history, routes },
  (error, redirectLocation, renderProps) => { // eslint-disable-line
    if (error) {
      return console.error('Require.ensure error'); // eslint-disable-line
    }
    render(<RouterApp {...renderProps} />, document.getElementById('app'));
  });

import { install } from 'offline-plugin/runtime';
install();
