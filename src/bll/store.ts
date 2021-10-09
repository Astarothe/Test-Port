import {combineReducers, createStore} from "redux";
import {pageReducer} from "./pageReducer";

const RootReducer = combineReducers({
    page: pageReducer,
})

export const store = createStore(RootReducer)

export type AppType = ReturnType<typeof RootReducer>