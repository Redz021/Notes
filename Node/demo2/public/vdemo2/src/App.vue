<template>
  <div id="app">
    <div>{{ msg }}</div>
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return{
      msg:'abc'
    }
  },
  created(){
    axios.get('http://localhost:3000/get_article_list')
    .then(res => {
      console.log(res)
      this.msg = res.data;
    })
    .catch(err => {
      console.error(err); 
    })
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
