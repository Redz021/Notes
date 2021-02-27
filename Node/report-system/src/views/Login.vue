<template>
  <div class="login-wrap">
    <el-card class="login-form" shadow="hover">
      <h1>登录</h1>
      <el-form>
        <el-form-item label="学号/工号">
          <el-input type="text" v-model="studyNum"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import userDataService from '../services/userDataService';
export default {
  data() {
    return {
      studyNum: '',
      password: ''
    };
  },
  methods: {
    login() {
      userDataService
        .login({ studyNum: this.studyNum, password: this.password })
        .then(res => {
          localStorage['token'] = res.data.token;
          this.$store.commit('login', { stat: true, data: res.data });
          if (res.data.user.type == 'student') {
            this.$router.push('/student');
          } else {
            this.$router.push('/teacher');
          }
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    userDataService
      .validate()
      .then(res => {
        if (res.data.code == 1) {
          if (res.data.type == 'student') {
            this.$router.push('/student');
          } else {
            this.$router.push('/teacher');
          }
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>
<style lang="less" scoped>
.login-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #ebb;
}
.login-form {
  width: 400px;
  padding: 30px;
}
</style>
