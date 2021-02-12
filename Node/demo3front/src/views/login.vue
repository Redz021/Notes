<template>
  <div style="width: 600px;border: 1px solid #ebebeb;border-radius: 5px;padding: 50px;">
    <h3>登录/注册</h3>
    <el-form ref="form" label-width="80px">
      <div style="overflow: hidden;">
        <div>
          <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
          </el-form-item>
        </div>
        <div><el-form-item label="密码">
          <el-input v-model="password"></el-input></el-form-item></div>
          <div>
            <el-button type="success" @click="login">登录</el-button>
          </div>
          <div>
            没有账号？<router-link :to="{path: '/regist'}">注册</router-link>
          </div>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    messageFunc(status, msg){
      this.$message({
        type: status,
        message: msg
      })
    },
    login(){
      if(!this.username){
        this.messageFunc('warning', '用户名不能为空')
        return
      }
      if(!this.password){
        this.messageFunc('warning', '密码不能为空')
        return
      }
      const obj = {
        username: this.username,
        password: this.password
      }
      this.axios.post('/regLogin/login',obj)
      .then(res => {
        console.log(res)
        this.messageFunc('success', '登录成功')
        setTimeout(()=>{
          this.$router.push({
            path: '/list'
          })
        }, 2000)
      })
      .catch(err => {
        console.error(err); 
        this.messageFunc('warning', err)
      })
    }
  }
}
</script>
<style>

</style>