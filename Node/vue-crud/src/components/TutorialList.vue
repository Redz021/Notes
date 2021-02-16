<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-form :inline="true">
          <el-form-item>
            <el-input placeholder="标题" v-model="title"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="searchTitle">搜索</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <h4>列表</h4>
        <ul class="list-group">
          <li
            class="list-item"
            v-for="(tutorial, index) in tutorials"
            :key="index"
            @click="setActiveTutorial(tutorial, index)"
          >
            {{ tutorial.title }}
          </li>
        </ul>
        <el-button type="danger">清空</el-button>
      </el-col>
      <el-col :span="6">
        <div v-if="currentTutorial">
          <h4>内容</h4>
          <div>
            <label for=""
              ><strong>标题：</strong>{{ currentTutorial.title }}</label
            >
          </div>
          <div>
            <label for=""
              ><strong>描述：</strong>{{ currentTutorial.description }}</label
            >
          </div>
          <div>
            <label for=""
              ><strong>状态：</strong>{{ currentTutorial.published }}</label
            >
          </div>
          <el-button
            ><a :href="'/tutorials/' + currentTutorial.id">编辑</a></el-button
          >
        </div>
        <div v-else>
          <p>从左侧选择一项</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then(res => {
          this.tutorials = res.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },
    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },
    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveTutorials();
  }
};
</script>
<style>
.list-group {
  width: 100%;
  list-style: none;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  padding: 0;
  height: 200px;
  overflow-y: auto;
}
.list-group .list-item {
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #ebebeb;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.list-item:hover {
  background: #aaffee;
}
</style>