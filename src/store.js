import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers.js';
import DevTools from './containers/DevTools';

//const enhancer = compose(
  // Middleware you want to use in development:
  // applyMiddleware(d1, d2, d3),
  // Required! Enable Redux DevTools with the monitors you chose
  // DevTools.instrument()
//);

export default function setupStore(){
  const initialState = {
  }
  let store
  if (process.env.NODE_ENV === 'production') {
    store = createStore(
      rootReducer,
      initialState)
  }
  else {
    store = createStore(
      rootReducer,
      initialState,
      DevTools.instrument()
    )
  }
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers')/*.default if you use Babel 6+ */)
    );
  }
  return store;
}
