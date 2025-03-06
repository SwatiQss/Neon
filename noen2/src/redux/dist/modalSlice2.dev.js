"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.closeModal2 = exports.openModal2 = void 0;

var _toolkit = require("@reduxjs/toolkit");

var modalSlice2 = (0, _toolkit.createSlice)({
  name: "modal2",
  initialState: {
    isOpen2: false
  },
  reducers: {
    openModal2: function openModal2(state) {
      state.isOpen2 = true;
      console.log("called");
    },
    closeModal2: function closeModal2(state) {
      state.isOpen2 = false;
    }
  }
});
var _modalSlice2$actions = modalSlice2.actions,
    openModal2 = _modalSlice2$actions.openModal2,
    closeModal2 = _modalSlice2$actions.closeModal2;
exports.closeModal2 = closeModal2;
exports.openModal2 = openModal2;
var _default = modalSlice2.reducer;
exports["default"] = _default;