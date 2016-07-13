import { createAction } from "redux-actions"
import * as types from "./types"

export const setTodo = createAction(types.SET_OBJ, (obj) => obj)
