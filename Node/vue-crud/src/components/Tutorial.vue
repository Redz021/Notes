<template>
  <div>
    <div v-if="currentTutorial">
      <h4>内容</h4>
      <el-form>
        <el-form-item label="标题">
          <el-input type="text" v-model="currentTutorial.title"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="text" v-model="currentTutorial.description"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <label for=""><strong>{{currentTutorial.published?'已出版':'未出版'}}</strong></label>
        </el-form-item>
        <el-button @click="updatePublished(!currentTutorial.published)">更改状态</el-button>
        <el-button type="danger" @click="deleteTutorial">删除</el-button>
        <el-button type="success" @click="updateTutorial">修改</el-button>
        <el-alert v-if="message" title="修改成功" type="success" show-icon></el-alert>
      </el-form>
    </div>
    <div>
      <p>选择一项</p>
    </div>
  </div>
</template>
<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "tutorial",
  data() {
    return {
      currentTutorial: null,
      message: ""
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then(res => {
          this.currentTutorial = res.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    updatePublished(status){
      let data = {
        id: this.currentTutorial.id,
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        published: status
      }
      TutorialDataService.update(this.currentTutorial.id, data).then(res=>{
        this.currentTutorial.published = status
        console.log(res.data)
      }).catch(err=>{
        console.log(err)
      })
    },
    updateTutorial(){
      TutorialDataService.update(this.currentTutorial.id, this.currentTutorial).then(res=>{
        console.log(res.data)
        this.message = '修改成功'
      }).catch(err=>{
        console.log(err)
      })
    },
    deleteTutorial(){
      TutorialDataService.delete(this.currentTutorial.id).then(res=>{
        console.log(res.data)
        this.$router.push({name: 'tutorials'})
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  mounted(){
    this.message = ''
    this.getTutorial(this.$route.params.id)
  }
};
</script>
<style>
</style>