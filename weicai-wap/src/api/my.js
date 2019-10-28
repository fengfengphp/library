import {api,formatParams,config} from '@/config/axios'
import { querystring } from 'vux'
export function getUserinfoApi (params){
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/admin/user/baseInfo`
    }))
}
//退出登录
export function loginOutApi (params){
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/auth/authentication/removeToken`
    }))
}
//获取网站 基础数据
export function getWebBasedataApi (params){
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/social/basic/getAppInitConfig`
    }))
}
