<template>
  <div>
    <div class="transfercontent">
      <el-form>
      <el-form-item label="转账金额">
        <el-input v-model="form.price"> </el-input>
      </el-form-item>
      <el-form-item label="转账交易号">
        <el-input v-model="form.number"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
    </div>
    
       <!-- 在线充值 -->
  </div>
</template>

<script>
export default {
   data(){
     return {
       form:{
         price:0,
        number:0,
       }  
     }
   },
   methods:{
      onSubmit() {
        console.log(this.form)
      }
   }
}
</script>

<style lang='scss' scoped>
.transfercontent{
  width: 500px;
  margin: 20px auto;
}
</style>