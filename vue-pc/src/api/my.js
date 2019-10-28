import {api,formatParams,config} from '@/config/axios'
export function getUserinfoApi (params){
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/admin/user/baseInfo`
    }))
}

export function getUserApi (params){
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/user`
    }))
}

export function postUserApi (params){
    return api(Object.assign(formatParams('POST',),{
        url:`${config.proxy}/userPost`
    }))
}
