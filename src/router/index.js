import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"

// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
import home from "../views/home/index.vue";
import notFound from '../components/404.vue'
///Users/sunqiying/Desktop/code/gongwen/transfterProject/transferviews/src/views/home/compontent/index.vue
import homePage from '../views/home/compontent/index.vue'
import login from '../views/home/compontent/login.vue'
import register from '../views/home/compontent/register.vue'
import feequery from '../views/home/compontent/feequery.vue'
import newuser from '../views/home/compontent/newuser.vue'
import usercenter from '../views/home/compontent/usercenter.vue'
//费用查询
// 2. 定义路由配置
const routes = [

  { path: "/", component: home,redirect:'/homepage',name:"首页",
  children:[
    {
      path:'/homepage',component:homePage,
    },
    //资费查询
    {
      path:'/feequery',component:feequery,
    },
     //用户中心
     {
      path:'/usercenter',component:usercenter,
    },
     //新手须知
     {
      path:'/newuser',component:newuser,
    },
      //登录页面
  {
    path:'/login',component:login,
  },
  //注册页面
  {
    path:'/register',component:register
  },
  ] },

  // {path:'*',compontent:notFound}
];

// 3. 创建路由实例
const router = createRouter({
  // 4. 采用hash 模式
  history: createWebHashHistory(),
  // 采用 history 模式
  // history: createWebHistory(),
  routes, //使用上方定义的路由配置
});

export default router 
//导出router
