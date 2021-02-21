<template>
  <div class="home">
    <el-header>
      <navbar></navbar>
    </el-header>
  </div>
</template>
<script>
import navbar from "@/components/NavBar.vue";
export default {
  name: "Home",
  components: {
    navbar,
  },
};
</script>
