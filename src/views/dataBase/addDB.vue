<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" class="main">
      <el-form-item label="数据库地址">
        <el-input v-model="form.url"/>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"/>
      </el-form-item>
      <el-form-item label="数据库类型">
        <el-input v-model="form.type"/>
      </el-form-item>
      <el-form-item label="其他">
        <el-input v-model="form.other"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        url: '',
        username: '',
        password: '',
        dataName: '',
        dataUser: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('添加成功!')
    },
    onCancel() {
      this.$message({
        message: '取消!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.main{
  width: 40%;
  min-width: 300px;
}
</style>

