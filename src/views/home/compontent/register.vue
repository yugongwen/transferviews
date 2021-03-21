<template>
  <div>
    <el-main class="registerData">
      <h4>注册</h4>
      <el-form ref="ruleForm" status-icon :model="form" :rules="rules" label-width="80px">
        <el-form-item label="电子邮箱">
          <el-input v-model="form.userMail" placeholder="请输入邮箱地址"></el-input>
        </el-form-item>
        <el-form-item label="会员名">
          <el-input v-model="form.username" placeholder="请输入会员名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" show-password placeholder="请输入密码"></el-input>
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
//引入注册接口
// import {}
import { postRegister} from '../../../api/api'
import {ElMessage} from 'element-plus'
// import { useRouter} from "vue-router";
export default {
  data() {
    return {
      form: {
        userMail: "",
        username: "",
        password: "",
        checkPass: "",
      },
    };
  },
  methods: {
    onSubmit() {
      delete this.form.checkPass
      
      
      // debugger;
      let registerData = this.form;
      console.log(registerData);
      // debugger;
      postRegister(registerData).then(data=>{
        console.log(data);
        if(data.status ==0){
          ElMessage.success({
            message:data.message,
            type:'success'
          })
          //跳转到登录
          // const router = useRouter();
          // console.log(router);
          // debugger;
            this.$router.push({path: "/login",});
        }else{
          ElMessage.warning({
            message:data.message,
            type:'warning'
          })
        }
        // debugger;
      })
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
