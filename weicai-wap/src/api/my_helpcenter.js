import {api,formatParams,config} from '@/config/axios'
//获取帮助信息
export function getHelpCenterApi (params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/promotion/skHelpCenter/querySkHelpCenter`
    }))
}
