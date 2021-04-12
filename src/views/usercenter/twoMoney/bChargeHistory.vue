<template>
  <div>
         <p>充值记录</p>
         <el-main >
            <el-table :data='tableData' stripe>
              <el-table-column prop="orderNumber" label="包裹或订单编号"></el-table-column>
              <el-table-column prop="type" label="收支类型" width='300'></el-table-column>
              <el-table-column prop="tradeTotal" label="交易金额(元)" width='200'></el-table-column>
              <el-table-column prop="accountTotal" label="账户金额(元)" width='200'></el-table-column>
              <el-table-column prop="explain" label="备注"></el-table-column>
                <el-table-column prop="tradeDate" label="交易日期" width='200'></el-table-column>
            </el-table>
       </el-main>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tableData:[{}]
    }
  }
}
</script>

<style scoped lang='scss'>
  *{
    // height: 100%;
    box-sizing: border-box;
    // padding: 0 20px;
  }
</style>