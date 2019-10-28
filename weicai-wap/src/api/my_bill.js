import {api,formatParams,config} from '@/config/axios'
//获取所有账单类型
export function getBillTypeApi (params){
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/finance/skBillType/list`
    }))
}
//获取账单数据
export function getBillApi (params){
    return api(Object.assign(formatParams('GET',params),{
        url:`${config.proxy}/finance/skBill/page`
    }))
}
