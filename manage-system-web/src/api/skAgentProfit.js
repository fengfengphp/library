import request from '@/router/axios'

export function fetchList(query) {
    return request({
        url: '/bms/skAgentProfit/commonpage',
        method: 'get',
        params: query
    })
}

export function createlog(datatime) {
    return request({
        url: '/bms/skAgentProfit/generate/' + datatime,
        method: 'get'
    })
}

export function getObj(id) {
    return request({
        url: '/bms/skAgentProfit/pay',
        method: 'post',
        data:id
    })
}
