<template>
    <div>
      <el-form ref="form">
      <div v-if="!submitted">
        <el-form-item label="标题">
          <el-input
            type="text"
            id="title"
            rqeuired
            v-model="tutorial.title"
            name="title"
          ></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input
            type="text"
            id="description"
            required
            v-model="tutorial.description"
            name="description"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="saveTutorial">提交</el-button>
        </el-form-item>
      </div>
      <div v-else>
        <h4>提交成功</h4>
        <el-button @click="newTutorial">继续添加</el-button>
      </div>
    </el-form>
    </div>
</template>
<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      let data = {
        title: this.tutorial.title,
        description: this.tutorial.description
      };
      TutorialDataService.create(data).then(res => {
        this.tutorial.id = res.data.id
        console.log(res.data)
        this.submitted = true
      }).catch(err => {
        console.log(err)
      })
    },
    newTutorial(){
      this.submitted = false
      this.tutorial = {}
    }
  }
};
</script>
<style>
</style>