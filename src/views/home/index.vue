<template>
  <!-- 转运网站首页 -->
  <el-container class='homeContent'>
    <el-header>
      <div>
      <div @click='handleSelect("homepage")'>
        <img src="../../assets/home/home_logo.png" alt="首页图标"  />
      </div>
        
        <div class="tiplogin" v-show="loginShow">
          <span>欢迎使用北欧海淘，请先</span>
          <el-button type="text" @click="handleSelect('login')">登录</el-button>
          <span>或者</span>
          <el-button type="text" @click="handleSelect('register')">注册</el-button>
        </div>
      </div>
      <div class="rightNav">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item index="homepage">首页</el-menu-item>
          <el-menu-item index="feequery">资费查询</el-menu-item>
          <el-menu-item index="newuser">新手上路</el-menu-item>
          <el-menu-item index="usercenter">用户中心</el-menu-item>
        </el-menu>
        <el-button type="text" class="exitButton" @click='exit()' v-show="!loginShow">退出</el-button>
      </div>
      <!-- <span>欢迎光临北欧海淘，请先登录或注册</span> -->
    </el-header>
       <router-view></router-view>
    
    <footer>
      <p>
        专业瑞典海淘美国代购转运，可以选择瑞典\美国直接发货或者拼箱转运,私人地址发货。
      </p>
    </footer>
  </el-container>
</template>

<script>
import { ref,getCurrentInstance } from "vue";
import { useRouter,} from "vue-router";
import event from '../../untils/event'
export default {
  data(){
    return {
      activeIndex:'',
      loginShow:true,
    }
  },
  setup() {
    const router = useRouter();
    // let current = getCurrentInstance();
    let homeactive = ref(localStorage.getItem('activehome')||`homepage`);
    // let activeIndex;
    function handleSelect(key, keyPath) {
      localStorage.setItem('activehome',key)
      if(key =='usercenter'){
        localStorage.setItem(`routerPath`,`personInfo`);
      }
        
      // debugger;
      router.push({
        path: key,
      });
    };
    return { homeactive,handleSelect };
  },
  methods:{
    exit(){
      this.$router.push('/homePage');
      localStorage.clear();
      this.loginShow= true;
      // this.homeactive = 'homePage'
    },
  },
  // created(){
    
  //   this.handleSelect(this.activeIndex)
  // },
  // mounted
  mounted(){
    this.activeIndex = localStorage.getItem('activehome');
    // this.loginShow = !localStorage.getItem('loginShow')
    // this.handleSelect(`homepage`)
    event.on('loginShow',(data)=>{
      // console.log(data);
      // debugger;
      this.loginShow = data;
    })
  }
};
</script>
<style scoped lang="scss">
// .contenthome{
//   width:100%;
//   display: flex;
//   justify-content: center;
  
  .homeContent{
    height:100%;
    margin:0;
    // overflow: hidden;
  }
// }
.el-header {
  // background:
  // width:80%;
  padding:0 4%;
  display: flex;
  justify-content: space-between;
  // position: fixed;
  // top:0;
  // align-items: center;
  div {
    display: flex;

    .tiplogin {
      padding-left: 60px;
      display: flex;
      width: 400px;
      align-items: center;
      font-size: 18px;
      button {
        font-size: 18px;
        padding: 0 4px;
      }
    }
  }
  .rightNav{
    min-width: 300px;
    .exitButton{
      font-size:14px;
      color:#999;
      padding: 0 20px;
    }
    .exitButton:hover{
      color:rgb(64, 158, 255)
    }
  }
}
// .el-main{
//   width:calc(100%-60px);
// }
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  height: 30px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  p {
    font-size:13px;
    margin: auto;
    color: #666;
  }
  // justify-content: center;
}
</style>
