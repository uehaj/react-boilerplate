import reducers from "./reducers"
import {createStore, applyMiddleware} from "redux"

export default function setupStore(){
  const initialState = {
  }
  return createStore(
    reducers,
    initialState
  )
}

