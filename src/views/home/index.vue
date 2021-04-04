<template>
  <!-- 转运网站首页 -->
  <el-container >
    <el-header>
      <div>
      <div @click='handleSelect("homepage")'>
        <img src="../../assets/home/home_logo.png" alt="首页图标"  />
      </div>
        
        <div class="tiplogin">
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
export default {
  setup() {
    
    const router = useRouter();
    let current = getCurrentInstance();
    let activeIndex = ref(`${current.ctx.activeIndex}`);
    function handleSelect(key, keyPath) {
       activeIndex =key;
      console.log(key, keyPath);
      // console.log(current.ctx.activeIndex);
     console.log(activeIndex)
      // debugger;
      router.push({
        path: `/${activeIndex}`,
      });
    };
    return {  activeIndex, handleSelect };
  },
  // data(){
  //   return
  // }
  // mounted(){
  //   getroute(){
  //     console.log(this.$route)
  //   }
  // }
};
</script>
<style scoped lang="scss">
// .contenthome{
//   width:100%;
//   display: flex;
//   justify-content: center;
  
// }
.el-header {
  // background:
  // width:80%;
  padding:0 4%;
  display: flex;
  justify-content: space-between;
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
  }
}
footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  p {
    margin: auto;
    color: #666;
  }
  // justify-content: center;
}
</style>
