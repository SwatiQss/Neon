"use strict";

var _toolkit = require("@reduxjs/toolkit");

var _modalSlice = require("./modalSlice");

var modalSlice2 = (0, _toolkit.createSlice)({
  name: "modal",
  initialState: {
    isOpen: false
  },
  reducers: {
    openModal: function openModal(state) {
      state.isOpen = true;
      console.log("called");
    },
    closeModal: function closeModal(state) {
      state.isOpen = false;
    }
  }
});