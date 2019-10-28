import {api,formatParams,config} from '@/config/axios'
import { querystring } from 'vux'
export function getGroupApi (params){
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/social/skChatGroup/joinGroupPage`
    }))
}

export function getNotice (params){
    let paramsQs = unescape(querystring.stringify(params));   
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/social/systemNotice/page?${paramsQs}`
    }))
}

export function getAppConfig (){ 
    return api(Object.assign(formatParams('GET'),{
        url:`${config.proxy}/social/basic/getAppConfig`
    }))
}

export function send(params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/social/redpacket/send`
    }))
}

export function grab(params){
    let paramsQs = unescape(querystring.stringify(params))
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/social/redpacket/grab?${paramsQs}`
    }))
}


export function sendGroupRedpacket(params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/social/group/sendGroupRedpacket`
    }))
}
//抢包id获取红包详情
export function getRedpackDetailsApi(params){
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/social/redpacket/getDetailByGrabId/${params}`
    }))
}
//获取红包详情
export function getRedpackApi(params){
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/social/redpacket/${params}`
    }))
}

export function getPictureApi(params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/promotion/skHelpCenter/getCustomerPicture`
    }))
}

export function getPicData(params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/promotion/skAdv/querySkAdv`
    }))
}
