// app/index.jsx
//import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import setupStore from './store';
import createContainer from './container';

// injectTapEventPlugin();

const appNode = document.createElement('div');
document.body.appendChild(appNode);

const store = setupStore()

ReactDOM.render(createContainer(store), appNode);

