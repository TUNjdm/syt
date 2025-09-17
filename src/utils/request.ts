// 对于axios函数库进行二次封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 利用axios.create方法创建一个axios实例：可以设置基础路径，超时时间的设置
const request = axios.create({
    baseURL: '/api',//请求基础路径设置
    timeout: 5000 //超时时间设置(5s)
})
// 请求拦截器
request.interceptors.request.use(config => {
    // 拦截请求，请求发送出去之前，可以进行一些操作,config是请求的配置对象，需要回调// 1.比如加入token// 2.比如加入用户信息// 3.比如加入请求头// 4.比如加入请求参数// 5.比如加入请求体// 6.比如加入请求头// 7.比如加入请求体
    return config 
})
// 响应拦截响应，响应回来之前，可以进行一些操作，返回响应数据
request.interceptors.response.use(response => {
    // 拦截响应，响应回来之前，可以进行一些操作,response是响应的配置对象，需要回调// 1.比如判断状态码，根据状态码进行不同的操作// 2.比如判断响应数据，根据响应数据进行不同的操作// 3.比如判断响应头，根据响应头进行不同的操作// 4.比如判断响应体，根据响应体进行不同的操作
    return response.data
}),(error) => {
      //处理http网络错误
      let status = error.response.status;
      switch (status) {
            case 404:
                  //错误提示信息
                  ElMessage({
                        type: 'error',
                        message: '请求失败路径出现问题'
                  })
                  break;
            case 500 | 501 | 502 | 503 | 504 | 505:
                  ElMessage({
                        type: 'error',
                        message: '服务器挂了'
                  })
                  break;
            case 401:
                  ElMessage({
                        type: 'error',
                        message: '参数有误'
                  })
                  break;
      }
      return Promise.reject(new Error(error.message))
};
export default request
