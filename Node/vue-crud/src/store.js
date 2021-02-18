import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userId: '',
        userInfo: {

        }
    },
    mutations: {
        ['setUser'](state, user) {
            sessionStorage.setItem('userId', user.studyNum)
            sessionStorage.setItem('userName', user.username)
            state.userId = user.studyNum
            state.userInfo = user
        }
    }
})

// const state = {
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