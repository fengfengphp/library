import {api,formatParams,config} from '@/config/axios'
//获取首选充值通道
export function getFIrstRechargeApi (params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/finance/skPayChannel/page`
    }))
}

//获取所有充值通道
export function getAllRechargeApi (params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/finance/skPayChannel/querPromotionShares`
    }))
}
//根据id获取通道详情
export function getOneRechargeApi (params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/finance/skPayChannel/getSyFinanceRecharType`
    }))
}

//获取银行卡列表类型
export function getBankTypeApi (params){
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/finance/skUserPaymentType/getPaymentType`
    }))
}

//银行卡充值 用户填写资料后返回信息
export function getBankMsgApi (params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/finance/transfer/info`
    }))
}
//用户重新下单 取消请求
export function concelOrderApi (params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/finance/transfer/cancelpay`
    }))
}
//银行卡充值  用户提交订单
export function submitBankRechargeApi (params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/finance/transfer/pay`
    }))
}
