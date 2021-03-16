<template>
  <div class="hello">
    <h1 @click="changeTitle">{{title}}</h1>
    <ul>
      <li v-for="user in users" :key="user">{{user}}</li>
    </ul>
    <button @click="clearUser">清空</button>
    <p>目前的$attrs：{{$attrs}}</p>
    <users2 v-bind="$attrs"></users2>
  </div>
</template>
<script>
import Users2 from "./Users2";
export default {
  name: "Users",
  data() {
    return {
      title: "点击切换",
    };
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  inheritAttrs: false,
  components: {
    users2: Users2,
  },
  methods: {
    changeTitle() {
      this.$emit("titleChanged", "改变父组件的值");
    },
    clearUser() {
      this.$emit("clear");
    },
  },
};
</script>
<style>
.hello {
  border: 1px solid #666;
  margin: 20px;
}
</style>