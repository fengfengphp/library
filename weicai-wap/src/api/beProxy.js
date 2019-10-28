import {api,formatParams,config} from '@/config/axios'

// 成为代理
export function getbeProxyApi (params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/social/proxy/applyAgent`
    }))
};
// 推广文案
export function getEduApi (params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/promotion/skPromoteCourse/queryPromoteCourse`
    }))
};