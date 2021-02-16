"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _router = _interopRequireDefault(require("./router"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _jsMd = _interopRequireDefault(require("js-md5"));

var _AppLogin = _interopRequireDefault(require("./App-login.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import App from './App.vue'
_vue["default"].config.productionTip = false;

_vue["default"].use(_elementUi["default"]);

_vue["default"].prototype.$md5 = _jsMd["default"];
new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_AppLogin["default"]);
  }
}).$mount('#app');