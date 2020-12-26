<template>
    <div>
        <el-row type="flex">
            <el-button>默认</el-button>
            <el-button type="success" plain round>成功</el-button>
            <el-button type="danger">危险</el-button>
            <el-button type="primary" :loading="true">加载中</el-button>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12"><el-input clearable placeholder="请输入" v-model="username"></el-input></el-col>
            <el-col :span="6"><el-input v-model="password" type="password"></el-input></el-col>
            <el-col :span="6"><el-button type="primary">登录</el-button></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            username: '',
            password: ''
        }
    }
}
</script>
<style>

</style>