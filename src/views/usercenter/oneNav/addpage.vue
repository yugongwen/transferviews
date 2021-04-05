<template>
  <div>
       <!-- 瑞典仓库 -->
       <p>包裹预报</p>
       <el-main  class="forminfo">
        <el-form label-width="160px" ref="form" :model="form">
         <el-form-item label='快递公司'>
           <el-input v-model="form.expressname"></el-input>
         </el-form-item>
         <el-form-item label='收件仓库'>
           <el-select v-model="form.region" placeholder="请选择收件仓库">
              <el-option label="瑞典仓库" value="sweden"></el-option>
               <el-option label="美国仓库" value="usa"></el-option>
             </el-select>
         </el-form-item>
          <el-form-item label='包裹运单号'>
           <el-input v-model="form.trackingnumber"></el-input>
         </el-form-item>
         <el-form-item label='估价/商品价值（元）'>
           <el-input v-model="form.price"></el-input>
         </el-form-item>
          <el-form-item label='重量（kg）'>
           <el-input v-model="form.weight"></el-input>
         </el-form-item>
         <el-form-item label='商品名称'>
           <el-input v-model="form.name"></el-input>
         </el-form-item>
          <el-form-item label="备注">
           <el-input type="textarea" v-model="form.info"></el-input>
           </el-form-item>
           <el-form-item>
             <el-button type="primary" @click="onSubmit">立即提交</el-button>
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
      expressname:'',
      receiveware:'',
      trackingnumber:0,
      price:0,
      weight:0,
      packagename:'',
      info:''
    }
  }
},
methods:{
onSubmit(){
  console.log('submit!');
}
}

}
</script>

<style>
.forminfo{
  width:40rem;
  margin:auto
  /* display: flex;
  align-items: center; */
  
}
</style>