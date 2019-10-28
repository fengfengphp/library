import request from '@/router/axios'

export function queryAdjustRecords(obj) {
    return request({
        url: '/bms/finance/adjust/page',
        method: 'post',
        data: obj
    })
}

export function getAdjustMoneySummary(obj) {
    return request({
        url: '/bms/finance/adjust/getAdjustMoneySummary',
        method: 'post',
        data: obj
    })
}
