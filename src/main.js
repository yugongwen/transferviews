import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
//引入vue3
// import Element3 from 'element3'
//引入elementplus
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// import 'element3/lib/theme-chalk/index.css'
// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app')
