<template>
  <div class="tickets">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="container"></div>
      </el-col>
      <el-col :span="12">
        <div class="container"></div>
      </el-col>
      <el-col :span="6">
        <div class="container"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.tickets {
  height: 100%;
  .el-row {
    height: 100%;
  }
  .el-col {
    height: 100%;
    .container {
      height: 100%;
    }
  }
}
</style>