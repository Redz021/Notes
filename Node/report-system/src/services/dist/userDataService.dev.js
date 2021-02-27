"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_axios["default"].defaults.baseURL = 'http://localhost:3000/api';

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
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

var userDataService =
/*#__PURE__*/
function () {
  function userDataService() {
    _classCallCheck(this, userDataService);
  }

  _createClass(userDataService, [{
    key: "login",
    value: function login(data) {
      return _axios["default"].post('/user/login', data);
    }
  }, {
    key: "validate",
    value: function validate() {
      return _axios["default"].post('/validate');
    }
  }, {
    key: "logout",
    value: function logout(data) {
      return _axios["default"].post('/logout', data);
    }
  }]);

  return userDataService;
}();

var _default = new userDataService();

exports["default"] = _default;