import {configureStore} from "@reduxjs/toolkit";
import valueReducer from "./cardSlice"
export const store =configureStore({
    reducer:{
        valueReducer
    }
})