import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    token: '',
    user: {}
  },
  mutations: {
    login(state, payload) {
      state.isLogin = payload.stat;
      state.token = payload.data.token;
      state.user = payload.data.user;
    },
    logout(state) {
      state.isLogin = false;
      state.token = '';
      state.user = {};
    }
  },
  actions: {},
  modules: {}
});
