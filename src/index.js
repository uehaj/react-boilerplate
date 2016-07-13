// app/index.jsx
//import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';

injectTapEventPlugin();

let appNode = document.createElement('div');
document.body.appendChild(appNode);

ReactDOM.render(<App />, appNode);

