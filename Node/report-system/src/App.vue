<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" router mode="horizontal">
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/about">About</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: "/",
    };
  },
  created: {},
  components: {},
};
</script>
<style>
@import url("./assets/base.css");
</style>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-link {
  text-decoration: none;
}
</style>
