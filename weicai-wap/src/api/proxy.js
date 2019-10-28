import {api,formatParams,config} from '@/config/axios'

export function getProxyApi (params){
    // let paramsQs = unescape(querystring.stringify(params))
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/proxy/skUserBaseinfoRankModel/page`
    }))
}
export function getMemberData (params){
    // let paramsQs = unescape(querystring.stringify(params))
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/proxy/skUserBaseinfoRankModel/team/count`
    }))
}