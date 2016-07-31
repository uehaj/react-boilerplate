import React from 'react';
import { bindActionCreators } from "redux"
import { connect, Provider } from "react-redux"
import App from "./components/App"
import DevTools from './containers/DevTools';

import * as actions from "./actions"

function mapStateToProps(state){
  return { bmiValue: state.bmiCalc.bmiValue }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default function createContainer(store) {
  let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
  return (
    <Provider store={store}>
      <div>
        <ConnectedApp />
        <DevTools />
      </div>
    </Provider>
  )
}
