import store2 from 'store2'
import axios from 'axios'
const config = {
    proxy:'/api',
    // proxy:'',
}
const api = axios.create({
    timeout: 10000,
    withCredentials:true
})

//判断不需要token接口
const noNeedToken = (conf) =>{
    let url = conf.url;
    let noCode = ['/auth/oauth/token','/admin/smsCode','/auth/mobile/token','/admin/user/mobile/token/reg','/admin/user/mobile/token/resetPasswd'];
    for(let i=0;i<noCode.length;i++){
        if(url.indexOf(noCode[i])>=0){
            return true
        }
    }
    return false
}

api.interceptors.request.use(conf => {
        //登录，注册，找回密码，发送验证码 token 不一样
        // if(noNeedToken(conf)){
        //     conf.headers['Authorization'] = 'Basic YXBwOmFwcA=='
        // }else if(store2('accesstoken')) {
        //     conf.headers['Authorization'] = 'Bearer' + store2('accesstoken')
        // }
        return conf
    },
    error => ({ status: 0, msg: error.message })
)

api.interceptors.response.use(response => {
        return Promise.resolve(response).then(checkCode)
    },
    error => {
        checkStatus(error.response)
        return Promise.reject(error)
    }
)
// 检查请求状态
const checkStatus = (res) => {
    switch (res.status)
    {
        case 478 :{
            alert(res.data.msg)
            break;
        }
        default:
            alert('服务器异常，请联系客服')
            break;
    }
}
// check code
const checkCode = (res) => {
    if(res){
        if(res.data.code === 0 || haveCode(res)){
            return res
        }else {
            alert(res.data.msg)
            return false
        }
    }else {
        return false
    }
}
//判断没有code 的页面(跳过这些接口)
const haveCode = (res) =>{
    let url = res.config.url;
    let noCode = ['/auth/oauth/token','/auth/mobile/token'];
    for(let i=0;i<noCode.length;i++){
        if(url.indexOf(noCode[i])>=0){
            return true
        }
    }
    return false
}


// 解析参数
const formatParams =  (method = 'GET', params) => {
    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
    }
    switch (method) {
        case 'POST':
            return {
                headers,
                method,
                data:params
            }
        case 'PUT':
            return {
                headers,
                method,
                data:params
            }
        case 'DELETE':
            return {
                headers,
                method,
            }
        case 'GET':
            return {
                headers,
                method,
                params
            }
        default:
            return {
                headers,
                method,
                params
            }
    }
}

export {api,formatParams,config}


