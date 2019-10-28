import {api,formatParams,config} from '@/config/axios'
import { querystring } from 'vux'
//登录
export function loginApi (params){
    let paramsQs = unescape(querystring.stringify(params))
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/auth/oauth/token?${paramsQs}`
    }))
}
//获取 短信验证码
export function getCodeApi (params){
    // let paramsQs = unescape(querystring.stringify(params))
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/admin/smsCode/${params}/reg`
    }))
}
//短信登录
export function loginCodeApi (params){
    let paramsQs = unescape(querystring.stringify(params))
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/auth/mobile/token?${paramsQs}`
    }))
}
//注册
export function registerApi (params){
    let paramsQs = unescape(querystring.stringify(params))
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/admin/user/mobile/token/reg?${paramsQs}`
    }))
}
//找回密码
export function backPasswordApi (params){
    let paramsQs = unescape(querystring.stringify(params))
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/admin/user/mobile/token/resetPasswd?${paramsQs}`
    }))
}
