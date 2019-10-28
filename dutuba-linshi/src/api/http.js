import axios from 'axios'
import QS from 'qs'

// 根据环境切换api地址

const API = {
  development: 'http://api.testdanbao.com',
  production: 'http://10.66.66.187:55555'
}
let hostname = location.hostname
API.production =
  hostname.indexOf('www') > -1
    ? location.origin.replace('www', 'api')
    : location.protocol+'//api.' + hostname
const http = {
  get: '',
  post: ''
}

const service = axios.create({
  baseURL: API[process.env.NODE_ENV],
  timeout: 10000
})

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//请求拦截器
service.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token')
    if (token) {
      config.headers.common['Authorization'] = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//添加响应拦截器
service.interceptors.response.use(
  res => Promise.resolve(res).then(checkCode),
  error => {
    // Message({
    //   message: error.message || '服务器异常',
    //   type: 'error',
    //   duration: 2 * 1000
    // })
    return Promise.reject(error)
  }
)

// 后台 状态码错误处理
const checkCode = res => {
  res.data.code = Number(res.data.code)
  switch (res.data.code) {
    case 200: {
      return res.data
    }
    case 401: {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('userInfo')
      // MessageBox.alert('登录已经过期，请重新登录', '登录过期', {
      //   confirmButtonText: '确定',
      //   callback: () => {
      //     location.href = '/'
      //   }
      // })
      return res.data
    }
    default: {
      // Message({
      //   message: res.data.msg,
      //   type: 'error',
      //   duration: 2 * 1000
      // })
      return res.data
    }
  }
}

http.get = function(url, params) {
  return new Promise((resolve, reject) => {
    service({
      method: 'get',
      url,
      params
    })
      .then(res => {
        //axios返回的是一个promise对象
        resolve(res) //resolve在promise执行器内部
      })
      .catch(err => {
        reject(err)
      })
  })
}

http.post = function(url, params) {
  return new Promise((resolve, reject) => {
    service({
      method: 'post',
      url,
      data: QS.stringify(params)
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default http
export const domain = API[process.env.NODE_ENV]
