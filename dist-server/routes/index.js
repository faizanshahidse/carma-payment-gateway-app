"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _payments = _interopRequireDefault(require("./payments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use('/card', _payments["default"]);
console.log('helo 1..........');
var _default = app;
exports["default"] = _default;