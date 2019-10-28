import {api,formatParams,config} from '@/config/axios'

export function getGroupApi (){
    return api(Object.assign(formatParams('GET'),{
        url:`${config.proxy}/social/skChatGroup/page`
    }))
}

//加群用 密码
export function passwordAddGroupApi (params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/social/skChatGroup/join`
    }))
}

export function groupusers (params){
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/social/skChatGroup/groupUsers`
    }))
}

export function logoutGroup (params){
    return api(Object.assign(formatParams('GET'),{
        url:`${config.proxy}/social/skChatGroup/quit/${params.id}`
    }))
}

