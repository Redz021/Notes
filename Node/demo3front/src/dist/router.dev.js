"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import layout from '../views/layout.vue'
_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  base: '/',
  routes: [{
    path: '/list',
    name: 'list',
    component: function component(resolve) {
      return require(['./views/list'], resolve);
    }
  }, {
    path: '*',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'login',
    component: function component(resolve) {
      return require(['./views/login'], resolve);
    }
  }, {
    path: '/regist',
    name: 'regist',
    component: function component(resolve) {
      return require(['./views/regist'], resolve);
    }
  }]
});

exports["default"] = _default;