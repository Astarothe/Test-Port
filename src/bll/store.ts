import {combineReducers, createStore} from "redux";
import {portfolioReducer} from "./PortfolioReducer";

const RootReducer = combineReducers({
    portfolio: portfolioReducer,
})

export const store = createStore(RootReducer)

export type AppType = ReturnType<typeof RootReducer>