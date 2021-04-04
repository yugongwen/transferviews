import addpage  from '../views/usercenter/oneNav/addpage.vue'
import bsweden from '../views/usercenter/oneNav/bSwedenAddress.vue'
import cUSA from '../views/usercenter/oneNav/cUsaAddress.vue'
import dreturn from '../views/usercenter/oneNav/dReturn.vue'
import ecurrent from '../views/usercenter/oneNav/eCurrentOrder.vue'
import fhistory from '../views/usercenter/oneNav/fHistoryOrder.vue'
//导航二 财务信息部分
import onlineCharge from '../views/usercenter/twoMoney/aOnlineCharge.vue'
import chargehistory from '../views/usercenter/twoMoney/bChargeHistory.vue'
import deductionDetail from '../views/usercenter/twoMoney/aOnlineCharge.vue'
import refound from '../views/usercenter/twoMoney/bChargeHistory.vue'
//导航三
import personInfo from '../views/usercenter/threeAcount/aPersonInfo.vue'
import bwareAddress from '../views/usercenter/threeAcount/bWareAddress.vue'
export default[
    {
        path:'/addpackge',component:addpage
      },
      {
        path:'/swedenAddress',component:bsweden
      },
      {
        path:'/usaAddress',component:cUSA
      },
      {
        path:'/returnpackge',component:dreturn
      },
      {
        path:'/currentOrder',component:ecurrent 
      },
      {
        path:'/historyOrders',component:fhistory
      },
      //第二导航
      {
        path:'/onlineCharge',component:onlineCharge
      },
      {
        path:'/chargeHistory',component:chargehistory
      },
      {
        path:'/deductionDetails',component:deductionDetail
      },
      {
        path:'/refund',component:refound
      },
      // 第三部分导航
      {
        path:'/personInfo',component:personInfo
      },
      {
        path:'/wareAddress',component:bwareAddress
      },
]
// { name: "包裹预报", route: "addPackge" },
//             { name: "瑞典仓库", route: "swedenAddress" },
//             { name: "美国仓库", route: "usaAddress" },
//             {name: "退货", route: "returnpackge" },
//             {name: "当前订单", route: "currentOrder" },
//             {name: "历史订单", route: "historyOrders" },
// {
//   navName: "财务信息",
//    navContent: [
//     { name: "包裹预报", route: "onlineCharge" },
//     { name: "充值记录", route: "chargeHistory" },
//     { name: "扣款明细", route: "deductionDetails" },
//     {name: "申请退款", route: "refund" }
//   ],
// },
// { name: "个人信息", route: "personInfo" },
// { name: "仓库地址", route: "wareAddress" },