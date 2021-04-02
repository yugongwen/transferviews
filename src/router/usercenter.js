import addpage  from '../views/usercenter/oneNav/addpage.vue'
import bsweden from '../views/usercenter/oneNav/bSwedenAddress.vue'
import cUSA from '../views/usercenter/oneNav/cUsaAddress.vue'
import dreturn from '../views/usercenter/oneNav/dReturn.vue'
import ecurrent from '../views/usercenter/oneNav/eCurrentOrder.vue'
import fhistory from '../views/usercenter/oneNav/fHistoryOrder.vue'
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
]
// { name: "包裹预报", route: "addPackge" },
//             { name: "瑞典仓库", route: "swedenAddress" },
//             { name: "美国仓库", route: "usaAddress" },
//             {name: "退货", route: "returnpackge" },
//             {name: "当前订单", route: "currentOrder" },
//             {name: "历史订单", route: "historyOrders" },