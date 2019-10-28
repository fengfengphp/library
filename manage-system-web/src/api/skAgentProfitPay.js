import request from '@/router/axios'

export function fetchList(query) {
    return request({
        url: '/bms/skAgentProfitPay/commonpage',
        method: 'get',
        params: query
    })
}

export function addObj(id) {
    return request({
        url: '/bms/skAgentProfitPay/pay/' + id,
        method: 'post'
    })
}


export function delObj(id) {
    return request({
        url: '/bms/skAgentProfitPay/back/' + id,
        method: 'post'
    })
}


