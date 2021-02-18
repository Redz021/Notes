"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    userId: '',
    userInfo: {}
  },
  mutations: _defineProperty({}, 'setUser', function setUser(state, user) {
    sessionStorage.setItem('userId', user.studyNum);
    sessionStorage.setItem('userName', user.username);
    state.userId = user.studyNum;
    state.userInfo = user;
  })
}); // const state = {
//     count: 0
// }
// const mutations = {
//     mutationsAddCount(state, n = 0) {
//         return (state.count += n)
//     },
//     mutationsReduceCount(state, n = 0) {
//         return (state.count -= n)
//     }
// }
// const actions = { //action是异步操作
//     actionsAddCount(context, n = 0) {
//         console.log(context)
//         return context.commit('mutationsAddCount', n)
//     },
//     actionsReduceCount({ commit }, n = 0) {
//         return commit('mutationsReduceCount', n)
//     }
// }
// const getters = { //一般使用getters获取state，是state的一个计算属性
//     getterCount(state, n = 0) {
//         return (state.count += n)
//     }
// }
// export default new Vuex.Store({
//     state,
//     mutations,
//     actions,
//     getters
// })


exports["default"] = _default;