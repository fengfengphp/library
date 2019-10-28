import {api,formatParams,config} from '@/config/axios'
import { querystring } from 'vux'

//获取个人报表数据
export function getMyselfReport(params){
    return api(Object.assign(formatParams('GET'),{
        url:`${config.proxy}/proxy/skUserBaseinfoRankModel/team/user/report/${params.id}`
    }))
}
// export function sendonConfirm(params){
//     return api(Object.assign(formatParams('POST',params),{
//         url:`${config.proxy}/social/promotReward/receive`
//     }))
// }
export function getRechargeReward(params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/social/promotReward/getRechargeReward`
    }))
}
// getRechargeReward2
export function getRechargeReward2(params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/social/promotReward/getRechargeReward`
    }))
}
export function getlistData(params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/promotion/skPromot/new/page`
    }))
}
export function getRechargeData(params){
    return api(Object.assign(formatParams('GET'),{
        url:`${config.proxy}/promotion/skPromot/recharge/detail/${params.promotId}`
    }))
}
export function getInviteData(params){
    return api(Object.assign(formatParams('GET'),{
        url:`${config.proxy}/promotion/skPromot/invite/detail/${params.promotId}`
    }))
}
export function getPushData(params){
    return api(Object.assign(formatParams('GET'),{
        url:`${config.proxy}/promotion/skPromot/commission/detail/${params.promotId}`
    }))
}
export function getStraightData(params){
    return api(Object.assign(formatParams('GET'),{
        url:`${config.proxy}/promotion/skPromot/bzsz/detail/${params.promotId}`
    }))
}
// 发包满额奖励详情
export function getSendData(params){
    return api(Object.assign(formatParams('GET'),{
        url:`${config.proxy}/promotion/skPromot/send/detail/${params.promotId}`
    }))
}
// 领取发包满额奖励
export function sendonConfirm(params){
    return api(Object.assign(formatParams('POST'),{
        url:`${config.proxy}/promotion/skPromot/get/send/reward/money/${params.promotId}`
    }))
}
// 抢包满额奖励详情
export function getReceiveData(params){
    return api(Object.assign(formatParams('GET'),{
        url:`${config.proxy}/promotion/skPromot/rob/detail/${params.promotId}`
    }))
}
// 领取抢包满额奖励
export function sendonConfirm2(params){
    return api(Object.assign(formatParams('POST'),{
        url:`${config.proxy}/promotion/skPromot/get/rob/reward/money/${params.promotId}`
    }))
}