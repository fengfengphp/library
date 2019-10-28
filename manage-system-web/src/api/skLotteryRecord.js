import request from '@/router/axios'

export function fetchList(query) {
    return request({
        url: '/promotion/skLotteryItemRecordModel/commonpage',
        method: 'get',
        params: query
    })
}

export function all() {
    return request({
        url: '/promotion/skLotteryItemRecordModel/all',
        method: 'get'
    })
}

export function addObj(obj) {
    return request({
        url: '/promotion/skLotteryItemRecordModel/',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/promotion/skLotteryItemRecordModel/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/promotion/skLotteryItemRecordModel/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/promotion/skLotteryItemRecordModel',
        method: 'put',
        data: obj
    })
}
