"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.closeModal = exports.openModal = void 0;

var _toolkit = require("@reduxjs/toolkit");

var modalSlice = (0, _toolkit.createSlice)({
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
var _modalSlice$actions = modalSlice.actions,
    openModal = _modalSlice$actions.openModal,
    closeModal = _modalSlice$actions.closeModal;
exports.closeModal = closeModal;
exports.openModal = openModal;
var _default = modalSlice.reducer;
exports["default"] = _default;