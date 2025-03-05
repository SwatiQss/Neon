import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import modalReducer2 from "./modalSlice2"; 

export const store=configureStore({
    reducer:{
        modal:modalReducer,
        modal2:modalReducer2
    },
});
