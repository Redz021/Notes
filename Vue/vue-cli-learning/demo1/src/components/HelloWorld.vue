<template>
  <div>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">24</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">12</div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">12</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple-light">gutter属性20(默认为0)</div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">gutter属性20(默认为0)</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="6"><div class="grid-content bg-purple-dark">offset属性设置偏移量</div></el-col>
    </el-row>
    <el-row type="flex" justify="center" :gutter="30">
      <el-col :span="6"><div class="grid-content bg-purple-light">flex</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">flex</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">flex</div></el-col>
    </el-row>
  </div>
</template>

<script>
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>