<template>
  <div>
    <h3>注册</h3>
    <el-form>
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="repeatpassword" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="regFunc">注册</el-button>
          <el-button @click="back">返回</el-button>
        </el-form-item>
    </el-form>
  </div>  
</template>
<script>
export default {
  data(){
    return{
      username: '',
      password: '',
      repeatpassword: ''
    }
  },
  methods: {
    back(){
      history.back()
    },
    regFunc(){
      //判空 此处省略

      const obj = {
        username: this.username,
        password: this.password
      }
      this.axios.post('/regLogin/regist',obj)
      .then(res => {
        console.log(res)
        this.$alert('注册成功', 'tips', {
          confirmButtonText: '登录',
          callback: () => {
            this.$router.push({path: '/login'})
          }
        })
      })
      .catch(err => {
        console.error(err); 
      })
    }
  }
}
</script>
<style>

</style>