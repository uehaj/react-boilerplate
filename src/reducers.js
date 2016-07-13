import { combineReducers } from 'redux'
import * as types from "./types"

const someItem = (state = {}, action) => {
  switch(action.type){
    case types.SET_OBJ:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  someItem
})

export default rootReducer
