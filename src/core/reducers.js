import { combineReducers } from 'redux'
import * as types from "./types"

const bmiCalc = (state = {bmiValue:0}, action) => {
  switch(action.type){
    case types.INPUT_DATA_CHANGE:
    return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  bmiCalc
})

export default rootReducer
