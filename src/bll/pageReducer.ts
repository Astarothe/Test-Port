import React from "react";

const initialState: StateType = {
    currentPage: "home"
}

export const pageReducer = (state: StateType = initialState, action: any): StateType => {
    switch (action.type) {
        default:
            return state
    }
}

type StateType = {
    currentPage: "home" | "about" | "contact" | "portfolio"
}