import Vue from "vue"
import Router from "vue-router"

// import layout from '../views/layout.vue'


Vue.use(Router);

export default new Router({
    base: '/',
    routes: [{
        path: '/list',
        name: 'list',
        component: resolve => require(['./views/list'], resolve)
    }, {
        path: '*',
        redirect: '/login'
    }, {
        path: '/login',
        name: 'login',
        component: resolve => require(['./views/login'], resolve)
    }, {
        path: '/regist',
        name: 'regist',
        component: resolve => require(['./views/regist'], resolve)
    }]
})