<template>
  <div id="app">
    <div>{{$store.state.count}}</div>
    <div>{{count}}</div>
    <el-button @click="handleAddClick(10)">+</el-button>
    <el-button @click="handleReduceClick(10)">-</el-button>
    <el-button @click="handleActionsAdd(20)">异步+</el-button>
    <el-button @click="handleActionsReduce(20)">异步-</el-button>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  data(){
    return{
      // localCount: 5
    }
  },
  computed:mapState(['count']),
  methods: {
    handleAddClick(n){
      this.$store.commit('mutationsAddCount', n)
    },
    handleReduceClick(n){
      this.$store.commit('mutationsReduceCount', n)
    },
    handleActionsAdd(n){
      this.$store.dispatch('actionsAddCount', n)
    },
    handleActionsReduce(n){
      this.$store.dispatch('actionsReduceCount', n)
    }
  }
}
</script>
<style>

</style>