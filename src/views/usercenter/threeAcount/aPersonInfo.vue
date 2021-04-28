<template>
  <div class="psersonInfo">
       <p>个人信息</p>
                 <el-main  class="forminfo">
        <el-form label-width="160px" ref="form" :model="form">
         <el-form-item label='姓名'>
           <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
         </el-form-item>
         <el-form-item label='电子邮箱'>
           <div class="addressSelect">
              <el-input v-model="form.email" placeholder="请输入电子邮箱"></el-input>
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
           </el-form-item>
       </el-form>
       </el-main>
  </div>
</template>

<script>
export default {
  data(){
    return{
       form:{
      name:'',
      email:'',
      personId:'',
      phone:'',
      address:'',
      weChat:'',
      qq:''
    }
    }
  },
  methods:{
    onSubmit(){
      console.log(this.form)
    }
  }
}
</script>

<style>
.psersonInfo{
  /* display: flex; */
  box-sizing: border-box;
  padding: 0 50px 10px;
}
</style>