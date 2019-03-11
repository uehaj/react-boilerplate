import { createStore } from 'redux';
import rootReducer from './reducers.js';

export default function setupStore() {
  const initialState = {};
  return createStore(rootReducer, initialState);
}
