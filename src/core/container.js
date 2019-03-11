import React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';
import App from '../pages/App';

import * as actions from './actions';

function mapStateToProps(state) {
  return { bmiValue: state.bmiCalc.bmiValue };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default function createContainer(store) {
  const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}
