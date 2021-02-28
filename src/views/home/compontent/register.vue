<template>
  <div>
    <el-main class="registerData">
      <h4>登录</h4>
      <el-form ref="ruleForm" status-icon :model="form" :rules="rules" label-width="80px">
        <el-form-item label="电子邮箱">
          <el-input v-model="form.mail" placeholder="请输入邮箱地址"></el-input>
        </el-form-item>
        <el-form-item label="会员名">
          <el-input v-model="form.username" placeholder="请输入会员名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pass" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            v-model="form.checkPass"
            show-password
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即注册</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        mail: "",
        username: "",
        pass: "",
        checkPass: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(form);
    },
  },
};
</script>
<style scoped lang="scss">
.registerData {
  width: 500px;
  margin: auto;
}
</style>
