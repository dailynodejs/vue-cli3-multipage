import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE,
  timeout: 5000 // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
)

// respone 拦截器
service.interceptors.response.use(
  response => {
    const data = response.data
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
