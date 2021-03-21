<template>
  <div>
    <!-- <el-header>会员登录</el-header> -->
    <el-main class="loginData">
      <h4>登录</h4>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名或者邮箱地址"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="form.password"
            show-password
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>

<script>
import { postLogin} from '../../../api/api'
import {ElMessage} from 'element-plus'
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      // console.log("submit");
      console.log(this.form);
      // debugger;
       postLogin(this.form).then(data=>{
         console.log(data)
         if(data.status ==1){
            ElMessage.warning({
            message:data.message,
            type:'warning'
          })
         }else{
           ElMessage.success({
            message:data.message,
            type:'success'
          })
          console.log(data.data.token)
          const token = data.data.token;
          window.localStorage.setItem('token',token)
         }
       })
    },
  },
};
</script>
<style scoped lang="scss">
.loginData {
  width: 400px;
  margin: auto;
  h4 {
    font-size: 20px;
  }
  //   display: flex;
}
</style>
