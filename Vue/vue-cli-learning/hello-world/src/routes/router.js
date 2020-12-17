import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import page1 from "@/components/page1";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    component: HelloWorld,
    name: "hello-world"
}, {
    path: "/page1",
    component: page1,
    name: "page1"
}];

const router = new VueRouter({
    routes
});

export default router;