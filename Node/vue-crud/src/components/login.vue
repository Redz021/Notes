<template>
  <div id="app">
    <el-container>
      <el-header></el-header>
      <el-row>
        <el-col :span="16" :offset="4">
          <el-card
            type="box-card"
            shadow="hover"
            :body-style="{ padding: '50px' }"
          >
            <div slot="header" style="padding: 0 30px">
              <h2>登录</h2>
            </div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px">
              <el-form-item label="学号/工号">
                <el-input type="text" v-model="ruleForm.studyNum"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="ruleForm.pwd"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>
<script>
import userDataService from "../services/userDataService";

export default {
  name: "App",
  data() {
    return {
      ruleForm: { studyNum: "", pwd: "" },
      rules: {
        studyNum: [
          { required: true, message: "内容不能为空", trigger: "blur" },
        ],
        pwd: [{ required: true, message: "内容不能为空", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      if(this.ruleForm.studyNum == ''||this.ruleForm.pwd == ''){
        return
      }
      // console.log(`num:${this.studyNum}\npwd:${this.pwd}\nmd5:${this.password}`)
      let userData = {
        studyNum: this.ruleForm.studyNum,
        password: this.password,
      };
      userDataService
        .login(userData)
        .then((res) => {
          console.log(res);

          this.$store.commit('setUser', res.data)
          this.$router.push({path:'/'})
          // console.log(sessionStorage.getItem('userId'))
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    password: function() {
      return this.$md5(this.ruleForm.pwd);
    },
  },
};
</script>
<style></style>
