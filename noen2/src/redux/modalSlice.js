import {createSlice} from "@reduxjs/toolkit";

const modalSlice=createSlice({
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
    },
});

export const {openModal,closeModal}=modalSlice.actions;
export default modalSlice.reducer;