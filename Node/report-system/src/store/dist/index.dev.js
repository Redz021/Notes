"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    isLogin: false,
    token: '',
    user: {}
  },
  mutations: {
    login: function login(state, payload) {
      state.isLogin = payload.stat;
      state.token = payload.data.token;
      state.user = payload.data.user;
    },
    logout: function logout(state) {
      state.isLogin = false;
      state.token = '';
      state.user = {};
    }
  },
  actions: {},
  modules: {}
});

exports["default"] = _default;