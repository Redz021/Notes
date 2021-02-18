"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  mode: 'history',
  routes: [{
    path: '/login',
    name: 'login',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./components/login.vue'));
      });
    }
  }, {
    path: '/tutorials',
    name: 'tutorials',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/components/TutorialList.vue'));
      });
    },
    meta: {
      requireAuth: true
    }
  }, {
    path: '/add',
    name: 'add',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/components/AddTutorial.vue'));
      });
    },
    meta: {
      requireAuth: true
    }
  }]
});
router.beforeEach(function (to, from, next) {
  if (to.meta.requireAuth) {
    var userId1 = sessionStorage.getItem('userId');
    var userId2 = _store["default"].state.userId;
    console.log(userId1);
    console.log(userId2);
    console.log(userId1 == userId2);

    if (userId1 != userId2) {
      router.replace('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});
var _default = router; // export default new Router({
//     mode: 'history',
//     routes: [{
//         path: '/',
//         alias: '/tutorials',
//         name: 'tutorials',
//         component: () =>
//             import ('./components/TutorialList.vue')
//     }, {
//         path: '/tutorials/:id',
//         name: 'tutorial-details',
//         component: () =>
//             import ('./components/Tutorial.vue')
//     }, {
//         path: '/add',
//         name: 'add',
//         component: () =>
//             import ('./components/AddTutorial.vue')
//     }]
// })

exports["default"] = _default;