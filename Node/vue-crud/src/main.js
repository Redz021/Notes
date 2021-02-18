import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import md5 from 'js-md5'
// import App from './App-login.vue'
// import App from './App-store.vue'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$md5 = md5

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')