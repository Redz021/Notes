<template>
  <div class="users2">
    <p>目前$attrs: {{$attrs}}</p>
    <ol>
      <li v-for="item in value" :key="item">{{item}}</li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "Users2",
  props: {
    value: Array,
  },
  inheritAttrs: false,
};
</script>
<style>
.users2 {
  border: 1px solid #333;
  margin: 30px;
}
</style>