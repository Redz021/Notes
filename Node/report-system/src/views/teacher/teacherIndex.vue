<template>
  <el-container>
    <el-header class="headerItem" style="background: #666;">
      教师
      <el-button @click="logout">注销</el-button>
    </el-header>
    <el-container>
      <el-aside width="300px">
        <el-menu mode="vertical" :router="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="/teacher/courses">Courses</el-menu-item>
          <el-menu-item index="/teacher/reports">Reports</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push('/');
    }
  }
};
</script>
<style lang="less" scoped>
.headerItem {
  color: #fff;
}
</style>
