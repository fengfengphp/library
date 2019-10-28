import {api,formatParams,config} from '@/config/axios'

export function getGroupruleApi(params){
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/social/skChatGroup/${params}`
    }))
}