<template>
  <div>
       <p>当前订单</p>
       <el-table :data='tableData' stripe>
         <el-table-column prop="orderNumber" label="订单日期"></el-table-column>
         <el-table-column prop="rackingnumber" label="运单号"></el-table-column>
         <el-table-column prop="weight" label="扣款重量"></el-table-column>
         <el-table-column prop="commitDate" label="提交时间"></el-table-column>
         <el-table-column prop="status" label="状态"></el-table-column>
         <el-table-column prop="status" label="操作" width="200">
           <template #default='scope'>
             <el-button @click="handleClick(scope.row)" type="text">
               付款
             </el-button>
             <el-button @click="handleClick(scope.row)" type="text">
               确认收获
             </el-button>
           </template>
         </el-table-column>
       </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableData:[
      {orderNumber:'1',rackingnumber:'2',weight:'3',commitDate:'4',status:'5'}
    ]
    }
  },
  methods:{
    handleClick(data){
      console.log(data);
    }
  }
}
</script>

<style>

</style>