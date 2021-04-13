<template>
  <div>
    <el-main class="registerData">
      <h4>注册</h4>
      <el-form ref="ruleForm" status-icon :model="form" :rules="rules" label-width="80px">
        <el-form-item label="电子邮箱" prop="mail">
          <el-input v-model="form.userMail" placeholder="请输入邮箱地址"></el-input>
        </el-form-item>
        <el-form-item label="会员名" prop="username">
          <el-input v-model="form.username" placeholder="请输入会员名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type='password' 
          v-model="form.password" 
          show-password 
          prop='pass'
          autocomplete="off"
          placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            v-model="form.checkPass"
            type='password'
            prop='checkPass'
            show-password
            autocomplete="off"
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class='buttonStyle'>
          <el-button type="primary" @click="onSubmit('ruleForm')">立即注册</el-button>
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
    var validatePass =(rule,value,callback)=>{
      if(value ===''){
        callback(new Error('请输入密码'))
      }else{
        if(this.form.checkPass !==''){
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    };
    var validatePass2 =(rule,value,callback)=>{
      if(value ==''){
        callback(new Error('请再次输入密码'))
      }else if(value !==this.form.pass){
        callback(new Error('两次输入密码不一致'))
      }else{
        callback()
      }
    }
    return {
      form: {
        userMail: "",
        username: "",
        password: "",
        checkPass: "",
      },
      rules:{
        mail:[ { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }],
        username:[{ required: true, message: '请输入用户名', trigger: 'blur' },],
         pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid)=>{
        if(valid){
          //验证合格
                delete this.form.checkPass
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
        }else{
          console.log('error submit')
          return false;
        }
      })
     
    },
  },
};
</script>
<style scoped lang="scss">
.registerData {
  h4{
    text-align: left;
    padding-bottom:0.8rem;
    border-bottom:solid 1px #eee;
    color:#666;
    font-size:16px;
  }
  border:1px solid #eee;
  border-radius:0.4rem  ;
  box-shadow: 0.2rem 0.2rem 6px  #eee ;
  width: 500px;
  margin: 4rem auto;
  box-sizing: border-box;
  padding:2.6rem;
}
</style>
