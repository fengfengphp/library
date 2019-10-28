import request from '@/router/axios'

export function fetchList(obj) {
    return request({
        url: '/promotion//skLotteryUser/page',
        method: 'post',
        data: obj
    })
}

export function all() {
    return request({
        url: '/promotion/skLotteryUser/all',
        method: 'get'
    })
}

export function addObj(obj) {
    return request({
        url: '/promotion/skLotteryUser/',
        method: 'post',
        data: obj
    })
}

export function findObj(obj) {
    return request({
        url: '/promotion/skLotteryUser/page/getSkLotteryNumberRecordByIds',
        method: 'post',
        data:obj
    })
}

export function delObj(id) {
    return request({
        url: '/promotion/skLotteryUser/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/promotion/skLotteryUser',
        method: 'put',
        data: obj
    })
}

export function editSkLotteryUser(obj){
    return request({
        url: '/promotion/skLotteryUser/editSkLotteryUser',
        method: 'post',
        data: obj
    })
}
