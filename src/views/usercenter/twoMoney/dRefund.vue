<template>
  <div>
       <div class="konwTip">
         <h6>重要提示</h6>
         <p>
            1.退款金额小于等于300元的客户，帐号填写支付宝账号，并且需要经过实名认证；退款金额大于300元的客户，帐号必须填写银行卡卡号，同时需填写开户行名称（XX银行XX支行），否则将否决该退款申请！
         </p>
         <p>
            2.退款时效为：退支付宝的申请，每月1号和15号开始处理，退银行卡的申请，每月1号开始处理，一般每次处理都需要10天左右时间，会按照申请时间的先后顺序来处理
         </p>
         <p>
            3.会员中心内的“余额补款”功能主要为了客户账户余额不足时补款所用，这部分充值的金额如果需要申请退款，我司将扣除3%的手续费。
         </p>
          <p>
            4.无故向我司支付宝账户转账充值后，未走单就申请退款，我司在退款操作时将扣除3%操作手续费。
         </p>
       </div>
  <div class="content">
      <el-form>
      <el-form-item label="申请退款金额">
        <el-input v-model="form.returnPrice"> </el-input>
      </el-form-item>
      <el-form-item label="支付宝账号或者银行卡号">
        <el-input v-model="form.number"> </el-input>
      </el-form-item>
      <el-form-item label="所有人">
        <el-input v-model="form.accountName"> </el-input>
      </el-form-item>
      <el-form-item label="开户银行或者支付宝" >
        <el-select v-model="form.info" placeholder='请选择收款方式'>
          <el-option label="支付宝" value="zhifubao"></el-option>
          <el-option label="银行" value="bank"></el-option>
        </el-select>
        <!-- <el-input v-model="form.accountName"> </el-input> -->
      </el-form-item>
      <!-- 如果是银行的话填写银行开户行 -->
      <el-form-item label="开户行名称">
        <el-input v-model="form.bankInfo"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{
        returnPrice:0,
        number:0,
        accountName:'',
        info:'',
        bankInfo:""
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.konwTip{
  width:96%;
  margin:auto;
  background-color: #FFF7F1;
  box-sizing: border-box;
  border:solid 1px #FFDAC8;
  border-radius:4px;
  padding: 10px 30px;
  h6{
    font-size:16px;
    line-height: 0;
    margin:20px 0 30px;
  }
  p{
    text-indent:25px;
    text-align: left;
    line-height: 30px;
    font-size:14px;
    margin:0;
  }
}
.content{
  box-sizing: border-box;
  padding: 10px 300px;
}
</style>