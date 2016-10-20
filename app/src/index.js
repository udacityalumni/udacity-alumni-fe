/* eslint-disable */ // React must be in scope here
import React from 'react';
/* eslint-enable */
import { render } from 'react-dom';
import RouterApp from './routes';
import '../styles/styles.scss';

render(<RouterApp />, document.getElementById('app'));
