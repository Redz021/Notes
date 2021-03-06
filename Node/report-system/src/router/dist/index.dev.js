"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _userDataService = _interopRequireDefault(require("../services/userDataService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  name: 'Login',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Login.vue'));
    });
  }
}, {
  path: '/student',
  name: 'studentIndex',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/student/studentIndex.vue'));
    });
  },
  meta: {
    requireAuth: true
  },
  children: [{
    path: 'courses',
    name: 'studentCourses',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/student/studentCourses.vue'));
      });
    }
  }, {
    path: 'reports',
    name: 'studentReports',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/student/studentReports.vue'));
      });
    }
  }]
}, {
  path: '/teacher',
  name: 'teacherIndex',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/teacher/teacherIndex.vue'));
    });
  },
  meta: {
    requireAuth: true
  },
  children: [{
    path: 'courses',
    name: 'teacherCourses',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/teacher/teacherCourses.vue'));
      });
    }
  }, {
    path: 'reports',
    name: 'teacherReports',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/teacher/teacherReports.vue'));
      });
    }
  }]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
router.beforeEach(function (to, from, next) {
  // console.log(store.state);
  if (to.meta.requireAuth) {
    var stat = -1;

    _userDataService["default"].validate().then(function (res) {
      stat = res.data.code;

      if (stat == 0) {
        router.push('/login');
      } else {
        next();
      }
    })["catch"](function (err) {
      console.error(err);
    });
  } else {
    next();
  }
});
var _default = router;
exports["default"] = _default;