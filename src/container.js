import React from 'react';
import { bindActionCreators } from "redux"
import { connect, Provider } from "react-redux"
import App from "./components/App.js"

import * as actions from "./actions"

function mapStateToProps(state){
  // 必要に応じてreselectとかここで使う
  return state
}

function mapDispatchToProps (dispatch) {
  // dispatchとかcomponent以下に渡したくないのでここでbindしてしまう。
  return bindActionCreators(actions, dispatch)
}

export default function createContainer(store){
  let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  )
}
