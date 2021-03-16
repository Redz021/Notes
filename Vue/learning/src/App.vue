<template>
  <div id="app">
    <h1>{{title}}</h1>
    <button @click="addUser">向子组件添加内容</button>
    <users :users='users' :value=value @titleChanged='updateTitle' @clear='clearUser'></users>
  </div>
</template>
<script>
import Users from "./components/Users";
export default {
  name: "App",
  data() {
    return {
      users: ["Alice", "Bob", "Tom"],
      title: "这是父组件标题",
      value: ["嵌", "套", "传", "值"],
    };
  },
  methods: {
    updateTitle(e) {
      this.title = e;
    },
    addUser() {
      this.users.push("test" + new Date().getTime());
    },
    clearUser() {
      this.users = [];
    },
  },
  components: {
    users: Users,
  },
};
</script>
<style lang="less">
</style>
