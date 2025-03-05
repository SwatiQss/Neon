"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _modalSlice = _interopRequireDefault(require("./modalSlice"));

var _modalSlice2 = _interopRequireDefault(require("./modalSlice2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    modal: _modalSlice["default"],
    modal2: _modalSlice2["default"]
  }
});
exports.store = store;