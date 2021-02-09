import Vue from "vue"
import Router from "vue-router"

import layout from '../views/layout.vue'

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'layout',
        component: layout,
        children: [{
            path: '/index',
            name: 'index',
            component: () =>
                import ('../views/index/index.vue')
        }]
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/index.vue')
    }]
})