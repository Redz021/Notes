import Vue from 'vue'
// import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import md5 from 'js-md5'

import App from './App-login.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$md5 = md5

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')