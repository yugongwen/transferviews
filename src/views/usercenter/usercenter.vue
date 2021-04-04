<template>
  <el-container>
    <!-- //left nav -->
    <el-aside>
      <el-menu :collapse="false" :default-active="activeIndex">
        <el-submenu v-for="(data,index) in navArray" :key='index.toString()' :index='index.toString()'>
          <template #title>
            <h4>{{data.navName}}</h4>
          </template>
          <el-menu-item v-for="(nav,index) in data.navContent" :key='index.toString()' :index="nav.route" @click='handleClick(nav.route)'>
             <template #title><h5>{{nav.name}}</h5></template>
            </el-menu-item>
        </el-submenu>
        
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import { useRouter } from "vue-router";
import {getCurrentInstance,ref} from 'vue'
// import { useRouter } from "vue-router";
export default {
  data() {
    return {
      navArray: [
        {
          navName: "运单信息",
          navContent: [
            { name: "包裹预报", route: "addPackge" },
            { name: "瑞典仓库", route: "swedenAddress" },
            { name: "美国仓库", route: "usaAddress" },
            {name: "退货", route: "returnpackge" },
            {name: "当前订单", route: "currentOrder" },
            {name: "历史订单", route: "historyOrders" },
          ],
        },
        {
          navName: "财务信息",
           navContent: [
            { name: "包裹预报", route: "onlineCharge" },
            { name: "充值记录", route: "chargeHistory" },
            { name: "扣款明细", route: "deductionDetails" },
            {name: "申请退款", route: "refund" }
          ],
        },
        {
          navName: "账户信息",
           navContent: [
            { name: "个人信息", route: "personInfo" },
            { name: "仓库地址", route: "wareAddress" },
          ],
        },
      ],
    };
  },
  setup(){
    const router = useRouter();
    let current = getCurrentInstance()
    let activeIndex = ref(`${current.ctx.activeIndex}`);
    function handleClick(key){
      console.log(current)
      router.push({
        path:`/${key}`
       
      })
    }
    return {
      handleClick,activeIndex
    }
  },
  methods:{
  },
  // mounted() {
  //   this.handleClick("wareAddress")
  // },
};
</script>
<style scoped lang='scss'>
h4{
  font-size:16px;
    font-weight: 600;
    color:#333;
  }
  li.is-opened li.is-active{
    h5{
      //  background-color: aquamarine;
      font-weight:600;
      color:rgb(64, 158, 255)
    }
    
  }
  h5{
     font-size:14px;
    font-weight: 450;
    color:#666;
    margin:0;
  }
</style>