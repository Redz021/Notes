"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router.js"));

var _elementUi = _interopRequireDefault(require("element-ui"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

require("element-ui/lib/theme-chalk/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import VueResource from 'vue-resource'
_vue["default"].use(_elementUi["default"]); // Vue.use(VueResource)


_vue["default"].use(_vueAxios["default"], _axios["default"]); // Vue.prototype.$http = axios


_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');