"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _httpCommon = _interopRequireDefault(require("../http-common"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var userDataService =
/*#__PURE__*/
function () {
  function userDataService() {
    _classCallCheck(this, userDataService);
  }

  _createClass(userDataService, [{
    key: "login",
    value: function login(data) {
      return _httpCommon["default"].post('/user/login', data);
    }
  }]);

  return userDataService;
}();

var _default = new userDataService();

exports["default"] = _default;