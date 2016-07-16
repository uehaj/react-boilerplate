import { createAction } from "redux-actions"
import * as types from "./types"

// redux-actionsは、Flux Standard Action(FSA)規約に従う
// Actionを作るためのライブラリ。createActionがそのような
// 標準Actionを作ってくれる関数。
export const inputDataChange = createAction(types.INPUT_DATA_CHANGE, (obj) => obj)
