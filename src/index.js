import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import { Provider } from 'react-redux';

import setupStore from './core/store';

const store = setupStore();

const appNode = document.createElement('div');
document.body.appendChild(appNode);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appNode
);
