import {Data} from "./MainReducer"
import {configureStore,combineReducers} from "@reduxjs/toolkit";

const rootReducer=combineReducers({
    Data
})

export const setupStore=()=>{
    return configureStore({
        reducer:rootReducer
    })
}