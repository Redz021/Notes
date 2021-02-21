<template>
  <el-menu :default-active="activeIndex" router mode="horizontal">
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/about">About</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      activeIndex: "/",
    };
  },
};
</script>
<style></style>
