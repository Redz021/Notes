<template>
  <div>
    <el-button type="primary" @click="handleLogin">请登录</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleLogin() {
      this.$store.state.isLogin = true;
      this.$router.push("/home");
    }
  }
};
</script>
<style></style>
