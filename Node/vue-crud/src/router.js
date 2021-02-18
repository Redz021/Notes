import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/login',
        name: 'login',
        component: () =>
            import ('./components/login.vue')
    }, {
        path: '/tutorials',
        name: 'tutorials',
        component: () =>
            import ('@/components/TutorialList.vue'),
        meta: {
            requireAuth: true
        }
    }, {
        path: '/add',
        name: 'add',
        component: () =>
            import ('@/components/AddTutorial.vue'),
        meta: {
            requireAuth: true
        }
    }]
})

import store from './store'

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        let userId1 = sessionStorage.getItem('userId')
        let userId2 = store.state.userId
        console.log(userId1)
        console.log(userId2)
        console.log(userId1 == userId2)
        if (userId1 != userId2) {
            router.replace('/login')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router

// export default new Router({
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