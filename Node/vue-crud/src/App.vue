<template>
  <div id="app">
    <!-- <router-link to="/tutorials">tutorials</router-link>
    <router-link to="/add">add</router-link>
    <el-header>
      <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="handleSelect"
          >
            <el-menu-item index="1">
              <router-link to="/">CRUD demo</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/tutorials">Tutorials</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/add">Add</router-link>
            </el-menu-item>
          </el-menu>
    </el-header>
    <el-container>
      <div style="width: 100%;padding: 2%;">
          <router-view></router-view>
      </div>
    </el-container> -->
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
a {
  text-decoration: none;
  color: lightblue;
}
</style>
