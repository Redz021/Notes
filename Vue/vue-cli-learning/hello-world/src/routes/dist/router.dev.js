"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HelloWorld = _interopRequireDefault(require("@/components/HelloWorld"));

var _page = _interopRequireDefault(require("@/components/page1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: "/",
  component: _HelloWorld["default"],
  name: "hello-world"
}, {
  path: "/page1",
  component: _page["default"],
  name: "page1"
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;