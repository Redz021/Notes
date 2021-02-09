import Vue from 'vue'
import App from './App.vue'
import router from './routers/router.js'
import ElementUI from 'element-ui'
// import VueResource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
// Vue.use(VueResource)
Vue.use(VueAxios, axios)
    // Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')