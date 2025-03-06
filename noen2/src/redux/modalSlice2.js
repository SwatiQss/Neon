import { createSlice } from "@reduxjs/toolkit";


const modalSlice2=createSlice({
    name:"modal2",
    initialState:{
        isOpen2:false,
    },
    reducers:{
        openModal2:(state)=>{
            state.isOpen2=true;
            console.log("called")
        },
        closeModal2:(state)=>{
            state.isOpen2=false;
        },
    }
});

export const {openModal2,closeModal2}=modalSlice2.actions
export default modalSlice2.reducer;