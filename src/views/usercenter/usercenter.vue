<template>
  <el-container>
    <!-- //left nav -->
    <el-aside>
      <el-menu :collapse="false" :default-active="navActive">
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
      <div class="contentRight">
          <router-view ></router-view>
      </div>
    
    </el-main>
  </el-container>
</template>

<script>
import { useRouter,onBeforeRouteUpdate } from "vue-router";
import {getCurrentInstance,ref} from 'vue'
// import { useRouter } from "vue-router";
export default {
  data() {
    return {
      navActive:'',
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
    // let current = getCurrentInstance()
    // let activeIndex=localStorage.getItem('routerPath');
    let homePage = localStorage.getItem('routerPath')
    function handleClick(key){
      // console.log(current)
      //  activeIndex = key;
      router.push({
        path:`/${key}`
       
      })
    }
    onBeforeRouteUpdate((to)=>{
      console.log(to,'=====');
      let newRouter =to.fullPath.substr(1)
      localStorage.setItem(`routerPath`,newRouter)
      // let urldata = to.fullPath.substr(1)
      // handleClick(urldata)
    })
    return {
      handleClick,onBeforeRouteUpdate
    }
  },
  mounted(){
    this.navActive = localStorage.getItem('routerPath');
  },
  // mounted() {
  //   fn()
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
.el-main{
  background-color:#D8D8D8;
  padding:10px 10px 40px 10px;
  overflow: scroll;
}
.contentRight{
  background-color: white;
  height: 100%;
  box-sizing: border-box;
  padding:10px;
  overflow: scroll;
}
</style>