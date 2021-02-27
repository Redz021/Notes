"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_axios["default"].interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.authorization = localStorage['token'];
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

_axios["default"].interceptors.response.use(function (response) {
  // Do something before response is sent
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

var _default = _axios["default"].create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'content-type': 'application/json'
  }
});

exports["default"] = _default;