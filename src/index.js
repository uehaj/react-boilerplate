import ReactDOM from 'react-dom';
import setupStore from './core/store';
import createContainer from './core/container';

// injectTapEventPlugin();

const appNode = document.createElement('div');
document.body.appendChild(appNode);

const store = setupStore();

ReactDOM.render(createContainer(store), appNode);
