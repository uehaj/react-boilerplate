import React from 'react';
import { bindActionCreators } from "redux"
import { connect, Provider } from "react-redux"
import App from "./components/App"
import DevTools from './containers/DevTools';

import * as actions from "./actions"

function mapStateToProps(state){
  console.log(state)
  return { bmiValue: state.bmiCalc.bmiValue }
}

function mapDispatchToProps(dispatch) {
  // dispatchとかcomponent以下に渡したくないのでここでbindしてしまう。
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
