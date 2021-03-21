import axios from 'axios';
import qs from 'qs'
//添加请求的拦截器。解决请求有options的问题
// axios.interceptors.request.use(
//     config =>{
//         if(config.method ==='post'){
//             config.data = qs.stringify(config.data)
//         }
//         return config
//     },
//     error=>{
//         console.log(error);
//         Promise.reject(error)
//     }
// )
// axios 配置 
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 
'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:3000'
 
// POST传参序列化 
axios.interceptors.request.use((config) => {
    if(config.method === 'post') {
        config.data = qs.stringify(config.data);
        config.headers['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'
    }
    return config;
}, (error) => {
    return Promise.reject(error);
}); 
 
// 返回状态判断 
// axios.interceptors.response.use((res) =>{ 
//     if(!res.data.success){ 
//         return Promise.reject(res);
//     } return res;
// }, (error) => {
//         //404等问题可以在这里处理 return Promise.reject(error); 
// })


let base = 'http://localhost:3000';
export const postRegister = params =>{return axios.post(`${base}/users/register`,params).then(res=>res.data).catch(err=>{});};
export const postLogin = params =>{return axios.post(`${base}/users/login`,params).then(res=>res.data).catch(err=>{});};
