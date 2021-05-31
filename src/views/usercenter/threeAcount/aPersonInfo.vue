<template>
  <div class="psersonInfo">
       <!-- <p>个人信息</p> -->
                 <el-main  class="forminfo">
        <el-form label-width="160px" ref="form" :model="form">
         <el-form-item label='姓名'>
           <el-input v-model="form.username" placeholder="请输入姓名"></el-input>
         </el-form-item>
         <el-form-item label='电子邮箱'>
           <div class="addressSelect">
              <el-input v-model="form.userMail" placeholder="请输入电子邮箱"></el-input>
           </div>
         </el-form-item>
          <el-form-item label='密码'>
           <div class="password">
              <el-input v-model="form.password" placeholder="请输入密码"></el-input>
           </div>
         </el-form-item>
          <el-form-item label='身份证号'>
           <el-input v-model="form.personId" placeholder="请输入身份证号"></el-input>
         </el-form-item>
         <el-form-item label='手机号'>
           <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
         </el-form-item>
          <el-form-item label='联系地址'>
           <el-input v-model="form.address" placeholder="请输入联系地址"></el-input>
         </el-form-item>
         <el-form-item label='微信号'>
           <el-input v-model="form.weChat" placeholder="请输入微信号"></el-input>
         </el-form-item>
          <el-form-item label="腾讯QQ">
           <el-input v-model="form.qq" placeholder="请输入QQ号"></el-input>
           </el-form-item>
           <el-form-item>
             <el-button type="primary" @click="onSubmit">确定</el-button>
             <!-- <el-button type="text" @click="changePass">修改密码</el-button> -->
           </el-form-item>
       </el-form>
       </el-main>
  </div>
</template>

<script>
import event from '../../../untils/event'
import {postUserinfo} from '../../../api/api'
import {reactive} from 'vue'
export default {
  data(){
    return{
       form:{
      username:'',
      usereMail:'',
      password:'',
      personId:'',
      phone:'',
      address:'',
      weChat:'',
      qq:''
    }
    }
  },
  setup(){
    let  userinfo = JSON.parse(localStorage.getItem('user'));
    // console.log(userinfo)
    // console.log('个人信息')
    // let userform = reactive(userinfo)
    return {userinfo}
  },
  methods:{
    onSubmit(){
      
      let userinfo={};
        userinfo.id=this.form._id;
      userinfo.username=this.form.username;
      userinfo.password=this.form.password;
      userinfo.userMail=this.form.userMail;
      userinfo.personId=this.form.personId;
      userinfo.phone=this.form.phone;
      userinfo.address=this.form.address;
      userinfo.weChat=this.form.weChat;
      userinfo.qq=this.form.qq;
      console.log(userinfo)
      // debugger;
      postUserinfo(userinfo).then(data=>{
        console.log(data)
        if(data.status ==0){
          this.form = userinfo;
          localStorage.setItem('user',JSON.stringify(userinfo))
        }
        else{
          console.log("保存失败")
        }
      })
    }
  },
  created(){
    this.form = this.userinfo ;
    console.log(this.form)
  }
}
</script>

<style>
.psersonInfo{
  /* display: flex; */
  box-sizing: border-box;
  padding: 4rem 18rem 10px;
}
</style>