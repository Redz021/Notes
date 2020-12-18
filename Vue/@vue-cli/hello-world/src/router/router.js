import Vue from "vue";
import VueRouter from "vue-router";

import home from "@/components/home.vue";
import page1 from "@/components/page1.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/home",
    component: home
}, {
    path: "/page1",
    component: page1
}]

var router = new VueRouter({
    routes
})

export default router;