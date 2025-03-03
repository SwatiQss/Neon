import { createSlice } from "@reduxjs/toolkit";
import { openModal } from "./modalSlice";

const modalSlice2=createSlice({
    name:"modal",
    initialState:{
        isOpen:false,
    },
    reducers:{
        openModal:(state)=>{
            state.isOpen=true;
            console.log("called")
        },
        closeModal:(state)=>{
            state.isOpen=false;
        },
    }
});

export const {openModal,closeModal}=modalSlice2.actions
export default modalSlice2.reducer;